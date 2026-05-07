import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-innovation-lab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './innovation-lab.component.html',
  styleUrls: ['./innovation-lab.component.scss']
})
export class InnovationLabComponent implements OnInit {
  cards = [
    { badge: 'Flagship Research', icon: '⚡', title: 'Smart Energy & Automation Initiative', desc: 'Our core research programme merges renewable energy management with intelligent automation — building IoT-enabled grid systems and AI-driven control units for Africa\'s smart infrastructure.' },
    { badge: 'In Development', icon: '🔐', title: 'Intelligent Security Platform', desc: 'AI-powered surveillance and smart threat detection systems for next-generation security infrastructure across commercial and residential environments.' },
    { badge: 'Concept Stage', icon: '🌞', title: 'Solar Micro-Grid Controller', desc: 'A low-cost embedded controller for managing distributed solar micro-grids in off-grid rural communities across Nigeria and Africa.' },
    { badge: 'IP Development', icon: '⚙️', title: 'Custom Automation Hardware', desc: 'Design and patenting of proprietary automation hardware modules for industrial and residential deployment at scale.' }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => observer.observe(el));
    }, 100);
  }
}
