import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {
  values = this.data.values;

  team = [
    { name: 'Chief Executive Officer', role: 'Leadership & Strategy', icon: '👔' },
    { name: 'Division Managers',       role: 'Operational Leadership', icon: '📊' },
    { name: 'Project Engineers',       role: 'Technical Delivery', icon: '⚙️' },
    { name: 'ICT Developers',          role: 'Digital Solutions', icon: '💻' },
    { name: 'Installation Teams',      role: 'Field Execution', icon: '🔧' },
    { name: 'Customer Support',        role: 'Client Relations', icon: '🤝' },
  ];

  milestones = [
    { year: 'Vision', text: 'Founded with a mission to deliver integrated technology and engineering across Africa.' },
    { year: 'Growth', text: '4 core divisions established — Solar, ICT, Security, and Research & Innovation.' },
    { year: 'Impact', text: '150+ projects completed across residential, commercial and industrial sectors.' },
    { year: 'Future', text: 'Expanding R&D capabilities and seeking strategic partners for new technology ventures.' },
  ];

  constructor(private data: DataService, private el: ElementRef) {}

  ngOnInit() {
    this.initReveal();
  }

  private initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll('.reveal')
        .forEach((el: Element) => observer.observe(el));
    }, 100);
  }
}
