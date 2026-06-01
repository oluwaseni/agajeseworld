import { Injectable } from '@angular/core';

export interface Division {
  id: string;
  number: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  accent: string;
  services: string[];
  electricalServices?: string[];
}

export interface Project {
  icon: string;
  imgUrl: string;
  category: string;
  title: string;
  description: string;
  color: string;
}

export interface Opportunity {
  icon: string;
  title: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {

  divisions: Division[] = [
    {
      id: 'energy',
      number: '01',
      icon: 'bi-lightning-charge',
      title: 'AGAJESE Energy',
      tagline: 'Solar Energy & Electrical Infrastructure',
      description: 'Complete solar energy and electrical infrastructure solutions for residential, commercial and industrial clients — from generation to distribution.',
      color: '#eef6e0',
      accent: '#8CC63F',
      services: [
        'Solar PV installations for homes & businesses',
        'Solar street lighting systems',
        'Solar borehole pumping systems',
        'Inverter and battery backup systems',
        'Solar equipment sales & installation'
      ],
      electricalServices: [
        'House wiring for new buildings',
        'Electrical rewiring and upgrades',
        'Distribution board installation',
        'Lighting system installations',
        'Electrical troubleshooting & maintenance',
        'Commercial & industrial electrical works'
      ]
    },
    {
      id: 'systems',
      number: '02',
      icon: 'bi-hdd-network',
      title: 'AGAJESE Systems',
      tagline: 'ICT & Digital Solutions',
      description: 'Digital infrastructure and information technology solutions for organizations building modern, connected and efficient environments.',
      color: '#eef4fc',
      accent: '#3D3F47',
      services: [
        'Computer sales, installation & repairs',
        'Networking and structured cabling',
        'Software development (web & custom)',
        'Website design and hosting',
        'Cloud services and data backup',
        'IT consultancy and technical support'
      ]
    },
    {
      id: 'tek',
      number: '03',
      icon: 'bi-shield-check',
      title: 'AGAJESE Tek',
      tagline: 'Security & Automation',
      description: 'Modern electronic security and smart automation technologies to protect assets and enable intelligent, automated buildings.',
      color: '#ededef',
      accent: '#3D3F47',
      services: [
        'CCTV surveillance system installation',
        'Electric fencing systems',
        'Access control (biometric, card, keypad)',
        'Burglar alarm systems',
        'Smart home & building automation',
        'Intercom and video doorbell systems',
        'Smart monitoring solutions'
      ]
    },
    {
      id: 'labs',
      number: '04',
      icon: 'bi-flask',
      title: 'AGAJESE Labs',
      tagline: 'Research, Innovation & Inventions',
      description: 'Technology research, invention and product development — transforming innovative ideas into practical, scalable products and solutions.',
      color: '#f5eeff',
      accent: '#6d28d9',
      services: [
        'Development of new technological inventions',
        'Design and prototyping of innovative systems',
        'Research in energy, automation & smart tech',
        'Intellectual property development',
        'Collaboration with engineers & researchers'
      ]
    }
  ];

  projects: Project[] = [
    {
      icon: 'bi-sun', category: 'Solar Energy',
      title: 'Commercial Solar PV Installation',
      description: 'Full-scale solar system with inverter and battery backup for commercial premises.',
      color: '#eef6e0',
      imgUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: 'bi-plug', category: 'Electrical',
      title: 'Estate Electrical Infrastructure',
      description: 'Complete wiring and distribution board installation for a 40-unit residential estate.',
      color: '#eef4fc',
      imgUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: 'bi-camera-video', category: 'Security',
      title: 'CCTV & Access Control Deployment',
      description: '40-camera surveillance with biometric access control across a multi-storey facility.',
      color: '#ededef',
      imgUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: 'bi-lightbulb', category: 'Solar Lighting',
      title: 'Solar Street Lighting Project',
      description: 'Installation of solar-powered street lighting across a residential community.',
      color: '#eef6e0',
      imgUrl: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: 'bi-wifi', category: 'ICT Services',
      title: 'Enterprise Network Infrastructure',
      description: 'Structured cabling, networking and server room setup for a regional organization.',
      color: '#eef4fc',
      imgUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: 'bi-cpu', category: 'Innovation Lab',
      title: 'Smart Energy Monitoring System',
      description: 'IoT-based energy monitoring prototype with real-time analytics dashboard.',
      color: '#f5eeff',
      imgUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'
    }
  ];

  opportunities: Opportunity[] = [
    { icon: 'bi-rocket', title: 'Technology Product Development', description: 'Co-invest in developing original technology products from concept to market-ready solutions.' },
    { icon: 'bi-flask', title: 'Research Collaborations', description: 'Partner with our R&D team on joint research in energy, automation, and smart systems.' },
    { icon: 'bi-building', title: 'Prototype & Manufacturing', description: 'Fund prototype development and scale-up through manufacturing partnerships.' },
    { icon: 'bi-file-earmark-check', title: 'IP Commercialization', description: 'Invest in and commercialize intellectual property developed in our Innovation Lab.' }
  ];

  values = [
    { icon: 'bi-lightbulb', name: 'Innovation', desc: 'Continuous exploration of new technologies' },
    { icon: 'bi-lock', name: 'Integrity', desc: 'Transparency and honesty in all operations' },
    { icon: 'bi-check-circle', name: 'Reliability', desc: 'Delivering dependable, quality services' },
    { icon: 'bi-trophy', name: 'Excellence', desc: 'The highest professional standards' },
    { icon: 'bi-leaf', name: 'Sustainability', desc: 'Environmentally responsible solutions' }
  ];
}
