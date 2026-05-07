import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  navLinks = [
    { label: 'Home',           path: '/' },
    { label: 'About',          path: '/about' },
    { label: 'Divisions',      path: '/divisions' },
    { label: 'Projects',       path: '/projects' },
    { label: 'Innovation Lab', path: '/innovation-lab' },
    { label: 'Investors',      path: '/investors' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }

  isActive(path: string): boolean {
    if (path === '/') return this.activePage === '/';
    return this.activePage.startsWith(path);
  }

  closeMenu() { this.menuOpen = false; }
}
