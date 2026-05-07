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
      id: 'solar',
      number: '01',
      icon: '☀️',
      title: 'Solar Energy & Electrical Systems',
      tagline: 'Clean Power, Reliable Infrastructure',
      description: 'Complete solar energy and electrical solutions for residential, commercial and industrial clients — from generation to distribution.',
      color: '#fff8ee',
      accent: '#e8820c',
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
        'Commercial & industrial electrical'
      ]
    },
    {
      id: 'ict',
      number: '02',
      icon: '💻',
      title: 'ICT / IT Services',
      tagline: 'Digital Infrastructure, Scalable Systems',
      description: 'Digital infrastructure and information technology solutions for organizations building modern, connected environments.',
      color: '#eef4fc',
      accent: '#1a3a5c',
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
      id: 'security',
      number: '03',
      icon: '🛡️',
      title: 'Innovation & Security Systems',
      tagline: 'Smart Protection, Intelligent Automation',
      description: 'Modern electronic security and smart automation technologies to protect assets and enable intelligent buildings.',
      color: '#eef8f3',
      accent: '#2d7a4f',
      services: [
        'CCTV surveillance system installation',
        'Electric fencing systems',
        'Access control (biometric, card, keypad)',
        'Burglar alarm systems',
        'Smart home automation',
        'Intercom and video doorbell systems',
        'Smart monitoring solutions'
      ]
    },
    {
      id: 'innovation',
      number: '04',
      icon: '🔬',
      title: 'Research, Innovation & Inventions',
      tagline: 'Inventing Tomorrow\'s Technology Today',
      description: 'Technology research, invention and product development — transforming innovative ideas into practical, scalable products.',
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
    { icon: '☀️', category: 'Solar Energy', title: 'Commercial Solar PV Installation', description: 'Full-scale solar system with inverter and battery backup for commercial premises.', color: '#fff8ee' },
    { icon: '🔌', category: 'Electrical', title: 'Estate Electrical Infrastructure', description: 'Complete wiring and distribution board installation for a 40-unit residential estate.', color: '#eef4fc' },
    { icon: '📹', category: 'Security', title: 'CCTV & Access Control Deployment', description: '40-camera surveillance with biometric access control across a multi-storey facility.', color: '#eef8f3' },
    { icon: '🏮', category: 'Solar Lighting', title: 'Solar Street Lighting Project', description: 'Installation of solar-powered street lighting across a residential community.', color: '#fff8ee' },
    { icon: '🌐', category: 'ICT Services', title: 'Enterprise Network Infrastructure', description: 'Structured cabling, networking and server room setup for a regional organization.', color: '#eef4fc' },
    { icon: '🤖', category: 'Innovation Lab', title: 'Smart Energy Monitoring System', description: 'IoT-based energy monitoring prototype with real-time analytics dashboard.', color: '#f5eeff' }
  ];

  opportunities: Opportunity[] = [
    { icon: '🚀', title: 'Technology Product Development', description: 'Co-invest in developing original technology products from concept to market-ready solutions.' },
    { icon: '🔬', title: 'Research Collaborations', description: 'Partner with our R&D team on joint research in energy, automation, and smart systems.' },
    { icon: '🏭', title: 'Prototype & Manufacturing', description: 'Fund prototype development and scale-up through manufacturing partnerships.' },
    { icon: '📜', title: 'IP Commercialization', description: 'Invest in and commercialize intellectual property developed in our Innovation Lab.' }
  ];

  values = [
    { icon: '💡', name: 'Innovation', desc: 'Continuous exploration of new technologies' },
    { icon: '🔒', name: 'Integrity', desc: 'Transparency and honesty in all operations' },
    { icon: '⚡', name: 'Reliability', desc: 'Delivering dependable, quality services' },
    { icon: '🏆', name: 'Excellence', desc: 'The highest professional standards' },
    { icon: '🌱', name: 'Sustainability', desc: 'Environmentally responsible solutions' }
  ];
}
