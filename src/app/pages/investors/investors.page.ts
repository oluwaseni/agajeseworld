import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-investors-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  templateUrl: './investors.page.html',
  styleUrls: ['./investors.page.scss']
})
export class InvestorsPage implements OnInit {
  opportunities = this.data.opportunities;

  models = [
    { icon: 'bi-cash-coin', title: 'Direct Investment', desc: 'Fund specific research projects or product development initiatives with defined milestones and returns.' },
    { icon: 'bi-diagram-2', title: 'Strategic Partnership', desc: 'Align resources, expertise, and market access to co-develop and commercialize new technologies.' },
    { icon: 'bi-building', title: 'Manufacturing Joint Venture', desc: 'Partner on scaling prototypes to full production through shared manufacturing agreements.' },
    { icon: 'bi-mortarboard', title: 'Research Collaboration', desc: 'Co-author research, share labs, and jointly develop intellectual property with academic rigor.' },
  ];

  constructor(private data: DataService, private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger')
        .forEach((el: Element) => observer.observe(el));
    }, 100);
  }
}
