import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
    title: 'AGAJESEWORLD – Energy, Technology & Innovation'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage),
    title: 'About Us – AGAJESEWORLD'
  },
  {
    path: 'divisions',
    loadComponent: () => import('./pages/divisions/divisions.page').then(m => m.DivisionsPage),
    title: 'Our Divisions – AGAJESEWORLD'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.page').then(m => m.ProjectsPage),
    title: 'Projects – AGAJESEWORLD'
  },
  {
    path: 'innovation-lab',
    loadComponent: () => import('./pages/innovation-lab/innovation-lab.page').then(m => m.InnovationLabPage),
    title: 'Innovation Lab – AGAJESEWORLD'
  },
  {
    path: 'investors',
    loadComponent: () => import('./pages/investors/investors.page').then(m => m.InvestorsPage),
    title: 'Investors & Partners – AGAJESEWORLD'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage),
    title: 'Contact – AGAJESEWORLD'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
