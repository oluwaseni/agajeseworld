import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-investors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss']
})
export class InvestorsComponent implements OnInit {
  opportunities = this.data.opportunities;
  constructor(private data: DataService, private el: ElementRef) {}
  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => observer.observe(el));
    }, 100);
  }
  scroll(id: string) { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); }
}
