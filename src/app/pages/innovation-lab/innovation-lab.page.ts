import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';

@Component({
  selector: 'app-innovation-lab-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  templateUrl: './innovation-lab.page.html',
  styleUrls: ['./innovation-lab.page.scss']
})
export class InnovationLabPage implements OnInit {
  research = [
    { badge: 'Flagship Research', status: 'Active', icon: 'bi-lightning-charge', title: 'Smart Energy & Automation Initiative', desc: 'Our core research programme merges renewable energy management with intelligent automation — IoT-enabled grid systems and AI-driven control units for Africa\'s smart infrastructure.', tags: ['IoT Systems', 'AI Integration', 'Energy AI', 'Prototyping'] },
    { badge: 'In Development', status: 'Building', icon: 'bi-shield-lock', title: 'Intelligent Security Platform', desc: 'AI-powered surveillance and smart threat detection systems for next-generation security infrastructure across commercial and residential environments.', tags: ['Machine Learning', 'Computer Vision', 'Real-time Analytics'] },
    { badge: 'Concept Stage', status: 'Research', icon: 'bi-sun', title: 'Solar Micro-Grid Controller', desc: 'A low-cost embedded controller for managing distributed solar micro-grids in off-grid rural communities across Nigeria and Africa.', tags: ['Embedded Systems', 'Rural Energy', 'Off-grid'] },
    { badge: 'IP Development', status: 'Patenting', icon: 'bi-gear', title: 'Custom Automation Hardware', desc: 'Design and patenting of proprietary automation hardware modules for industrial and residential deployment at scale.', tags: ['Hardware Design', 'Intellectual Property', 'Manufacturing'] },
  ];

  focus = [
    { icon: 'bi-flask', title: 'Applied Research', desc: 'Rigorous research in energy systems, automation, and smart technologies.' },
    { icon: 'bi-wrench', title: 'Prototyping', desc: 'Rapid design and prototyping of innovative systems from concept to physical model.' },
    { icon: 'bi-file-earmark-check', title: 'IP Development', desc: 'Building and protecting intellectual property for long-term commercial value.' },
    { icon: 'bi-handshake', title: 'Open Collaboration', desc: 'Partnering with engineers, universities, and research institutions for breakthrough results.' },
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll('.reveal')
        .forEach((el: Element) => observer.observe(el));
    }, 100);
  }
}
