import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  divisions = this.data.divisions;

  tickerItems = [
    'AGAJESE Energy', 'Solar Energy Systems', 'Electrical Infrastructure',
    'AGAJESE Systems', 'ICT & Digital Solutions', 'Software Development',
    'AGAJESE Tek', 'Security & Automation', 'CCTV & Access Control',
    'AGAJESE Labs', 'Research & Innovation', 'Strategic Partnerships'
  ];

  whyUs = [
    { icon: 'bi-people',      title: 'Experienced Engineers', desc: 'Skilled professionals across all four technology disciplines.' },
    { icon: 'bi-diagram-3',   title: 'Integrated Expertise',  desc: 'One company, four divisions — seamless cross-disciplinary delivery.' },
    { icon: 'bi-check-circle',title: 'Reliable Delivery',     desc: 'Dependable project execution with quality assurance at every stage.' },
    { icon: 'bi-tag',         title: 'Competitive Pricing',   desc: 'High-quality outcomes at transparent, fair market pricing.' },
  ];

  stats = [
    { value: 150, suffix: '+', label: 'Projects Completed', display: 0 },
    { value: 600, suffix: '+', label: 'Clients Served',     display: 0 },
    { value: 4,   suffix: '',  label: 'Core Divisions',     display: 0 },
    { value: 100, suffix: '%', label: 'Quality Assured',    display: 0 },
  ];

  private statsAnimated = false;

  constructor(private data: DataService, private el: ElementRef) {}

  ngOnInit() {
    this.initReveal();
    this.initCounters();
  }

  private initReveal() {
    const sel = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger';
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll(sel)
        .forEach((el: Element) => observer.observe(el));
    }, 100);
  }

  private initCounters() {
    const band = this.el.nativeElement.querySelector('.stats-band');
    if (!band) return;
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !this.statsAnimated) {
          this.statsAnimated = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.4 }).observe(band);
  }

  private animateCounters() {
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.stats.forEach(s => s.display = Math.round(eased * s.value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
