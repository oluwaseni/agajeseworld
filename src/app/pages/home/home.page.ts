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
    'Solar Energy Systems', 'Electrical Engineering', 'ICT Infrastructure',
    'CCTV & Security', 'Smart Automation', 'Research & Invention',
    'Software Development', 'Access Control', 'Borehole Pumping', 'Strategic Partnerships'
  ];

  whyUs = [
    { icon: '👷', title: 'Experienced Engineers', desc: 'Skilled professionals across all four technology disciplines.' },
    { icon: '🔗', title: 'Integrated Expertise', desc: 'One company, four divisions — seamless cross-disciplinary delivery.' },
    { icon: '✅', title: 'Reliable Delivery', desc: 'Dependable project execution with quality assurance at every stage.' },
    { icon: '💰', title: 'Competitive Pricing', desc: 'High-quality outcomes at transparent, fair market pricing.' },
  ];

  constructor(private data: DataService) {}
}
