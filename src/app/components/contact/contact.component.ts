import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form = { name: '', phone: '', email: '', division: '', message: '' };
  submitted = false;
  error = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => observer.observe(el));
    }, 100);
  }

  submit() {
    const { name, email, message } = this.form;
    if (!name || !email || !message) { this.error = true; return; }
    this.error = false;
    this.submitted = true;
    this.form = { name: '', phone: '', email: '', division: '', message: '' };
    setTimeout(() => this.submitted = false, 5000);
  }
}
