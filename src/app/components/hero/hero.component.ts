import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  tickerItems = [
    'Solar Energy Systems', 'Electrical Engineering', 'ICT Infrastructure',
    'CCTV & Security', 'Smart Automation', 'Research & Invention',
    'Software Development', 'Access Control', 'Borehole Pumping', 'Strategic Partnerships'
  ];

  scroll(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
