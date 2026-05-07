import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  cols = [
    {
      heading: 'Divisions',
      links: [
        { label: 'Solar & Electrical', path: '/divisions' },
        { label: 'ICT / IT Services',  path: '/divisions' },
        { label: 'Security Systems',   path: '/divisions' },
        { label: 'Innovation Lab',     path: '/innovation-lab' }
      ]
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us',       path: '/about' },
        { label: 'Projects',       path: '/projects' },
        { label: 'Innovation Lab', path: '/innovation-lab' },
        { label: 'Investors',      path: '/investors' }
      ]
    },
    {
      heading: 'Contact',
      links: [
        { label: 'Get a Quote',       path: '/contact' },
        { label: 'Book Consultation', path: '/contact' },
        { label: 'Partner With Us',   path: '/investors' },
        { label: 'WhatsApp Us',       path: '/contact' }
      ]
    }
  ];
}
