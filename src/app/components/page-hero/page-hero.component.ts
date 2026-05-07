import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Breadcrumb {
  label: string;
  path?: string;
}

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-hero" [style.background]="bg">
      <div class="page-hero-img" *ngIf="imgUrl">
        <img [src]="imgUrl" [alt]="title" />
        <div class="img-overlay"></div>
      </div>
      <div class="container">
        <nav class="breadcrumb">
          <a routerLink="/">Home</a>
          <span class="sep">›</span>
          <ng-container *ngFor="let b of breadcrumbs; let last = last">
            <a *ngIf="b.path && !last" [routerLink]="b.path">{{ b.label }}</a>
            <span *ngIf="!b.path || last" class="current">{{ b.label }}</span>
            <span class="sep" *ngIf="!last">›</span>
          </ng-container>
        </nav>
        <div class="page-hero-content">
          <span class="label-tag" [class]="tagClass">{{ tag }}</span>
          <h1 class="page-hero-title" [innerHTML]="title"></h1>
          <p class="page-hero-sub" *ngIf="subtitle">{{ subtitle }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-hero {
      padding: 120px 5% 80px;
      position: relative;
      overflow: hidden;
      min-height: 320px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .page-hero-img {
      position: absolute;
      inset: 0;
      z-index: 0;

      img {
        width: 100%; height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .img-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(
          105deg,
          rgba(247,245,240,0.97) 0%,
          rgba(247,245,240,0.88) 40%,
          rgba(247,245,240,0.55) 100%
        );
      }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 1.5rem;
      font-size: 0.8rem;
      flex-wrap: wrap;

      a {
        color: var(--text-muted);
        text-decoration: none;
        transition: color 0.2s;
        &:hover { color: var(--accent); }
      }

      .current { color: var(--accent); font-weight: 600; }
      .sep { color: var(--text-light); }
    }

    .label-tag {
      display: inline-flex;
      align-items: center;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
      background: var(--accent-light);
      padding: 0.35rem 0.85rem;
      border-radius: 50px;
      border: 1px solid rgba(232,130,12,0.2);
      margin-bottom: 1rem;

      &.blue { color: var(--accent2); background: var(--accent2-light); border-color: rgba(26,58,92,0.15); }
      &.green { color: var(--green); background: var(--green-light); border-color: rgba(45,122,79,0.2); }
      &.purple { color: #6d28d9; background: #f5eeff; border-color: rgba(109,40,217,0.2); }
    }

    .page-hero-title {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      font-weight: 800;
      line-height: 1.1;
      color: var(--text);
      margin-bottom: 1rem;

      :host ::ng-deep em { font-style: italic; color: var(--accent); }
    }

    .page-hero-sub {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 560px;
      font-weight: 300;
      line-height: 1.8;
    }
  `]
})
export class PageHeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() tag = '';
  @Input() tagClass = '';
  @Input() bg = 'var(--bg)';
  @Input() imgUrl = '';
  @Input() breadcrumbs: Breadcrumb[] = [];
}
