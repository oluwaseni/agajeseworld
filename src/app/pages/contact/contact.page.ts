import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PageHeroComponent],
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {
  form = { name: '', phone: '', email: '', division: '', service: '', message: '' };
  submitted = false;
  error = false;

  faqs = [
    { q: 'How quickly do you respond to quotes?', a: 'We aim to respond to all enquiries within 24 hours on business days.' },
    { q: 'Do you serve clients outside Lagos?', a: 'Yes — we serve clients across Nigeria and are open to projects throughout Africa.' },
    { q: 'Can you handle projects across multiple divisions?', a: 'Absolutely. Our integrated model means we can coordinate Solar, ICT, Security, and Innovation on a single project.' },
    { q: 'Do you offer maintenance after installation?', a: 'Yes — we provide post-installation support and maintenance contracts for all our systems.' },
  ];

  openFaq: number | null = null;

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

  submit() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      this.error = true; return;
    }
    this.error = false;
    this.submitted = true;
    this.form = { name: '', phone: '', email: '', division: '', service: '', message: '' };
    setTimeout(() => this.submitted = false, 6000);
  }

  toggleFaq(i: number) {
    this.openFaq = this.openFaq === i ? null : i;
  }
}
