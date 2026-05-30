import { Component } from '@angular/core';
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
export class HomePage {
  divisions = this.data.divisions;

  tickerItems = [
    'AGAJESE Energy', 'Solar Energy Systems', 'Electrical Infrastructure',
    'AGAJESE Systems', 'ICT & Digital Solutions', 'Software Development',
    'AGAJESE Tek', 'Security & Automation', 'CCTV & Access Control',
    'AGAJESE Labs', 'Research & Innovation', 'Strategic Partnerships'
  ];

  whyUs = [
    { icon: 'bi-people', title: 'Experienced Engineers', desc: 'Skilled professionals across all four technology disciplines.' },
    { icon: 'bi-diagram-3', title: 'Integrated Expertise', desc: 'One company, four divisions — seamless cross-disciplinary delivery.' },
    { icon: 'bi-check-circle', title: 'Reliable Delivery', desc: 'Dependable project execution with quality assurance at every stage.' },
    { icon: 'bi-tag', title: 'Competitive Pricing', desc: 'High-quality outcomes at transparent, fair market pricing.' },
  ];

  constructor(private data: DataService) {}
}
