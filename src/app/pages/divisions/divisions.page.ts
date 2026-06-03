import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { DataService, Division } from '../../services/data.service';

@Component({
  selector: 'app-divisions-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  templateUrl: './divisions.page.html',
  styleUrls: ['./divisions.page.scss']
})
export class DivisionsPage implements OnInit {
  divisions: Division[];
  activeId: string | null = null;

  constructor(private data: DataService, private el: ElementRef) {
    this.divisions = data.divisions;
  }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger')
        .forEach((el: Element) => observer.observe(el));
    }, 100);
  }

  toggle(id: string) {
    this.activeId = this.activeId === id ? null : id;
    if (this.activeId) {
      setTimeout(() => {
        const el = this.el.nativeElement.querySelector(`#detail-${id}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }

  get active(): Division | null {
    return this.divisions.find(d => d.id === this.activeId) ?? null;
  }
}
