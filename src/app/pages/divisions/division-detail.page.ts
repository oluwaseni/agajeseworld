import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService, Division } from '../../services/data.service';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';

@Component({
  selector: 'app-division-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  templateUrl: './division-detail.page.html',
  styleUrls: ['./division-detail.page.scss']
})
export class DivisionDetailPage implements OnInit {
  division: Division | null = null;

  private heroImages: Record<string, string> = {
    energy:  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&auto=format&fit=crop&q=80',
    systems: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80',
    tek:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=80',
    labs:    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.division = this.data.divisions.find(d => d.id === params['id']) ?? null;
      if (!this.division) { this.router.navigate(['/divisions']); return; }
      window.scrollTo({ top: 0 });
      setTimeout(() => this.initReveal(), 100);
    });
  }

  get heroImg(): string {
    return this.division ? (this.heroImages[this.division.id] ?? '') : '';
  }

  get otherDivisions(): Division[] {
    return this.data.divisions.filter(d => d.id !== this.division?.id);
  }

  private initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    this.el.nativeElement.querySelectorAll('.reveal')
      .forEach((el: Element) => observer.observe(el));
  }
}
