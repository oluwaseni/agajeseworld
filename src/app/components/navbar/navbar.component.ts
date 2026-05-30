import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() activePage = '/';

  scrolled = false;
  menuOpen = false;
  divDropOpen = false;
  divMobileOpen = false;

  navLinks = [
    { label: 'Home',           path: '/' },
    { label: 'About',          path: '/about' },
    { label: 'Projects',       path: '/projects' },
    { label: 'Innovation Lab', path: '/innovation-lab' },
    { label: 'Investors',      path: '/investors' },
  ];

  get divisionLinks() {
    return this.data.divisions.map(d => ({
      label: d.title,
      tagline: d.tagline,
      icon: d.icon,
      path: `/divisions/${d.id}`
    }));
  }

  constructor(private data: DataService, private el: ElementRef) {}

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 40; }

  @HostListener('document:click', ['$event'])
  onDocClick(e: Event) {
    if (!this.el.nativeElement.contains(e.target)) {
      this.divDropOpen = false;
    }
  }

  isActive(path: string): boolean {
    if (path === '/') return this.activePage === '/';
    return this.activePage.startsWith(path);
  }

  toggleDivDrop(e: Event) {
    e.stopPropagation();
    this.divDropOpen = !this.divDropOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.divDropOpen = false;
    this.divMobileOpen = false;
  }
}
