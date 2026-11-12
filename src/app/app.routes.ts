
import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { About } from './features/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'about',
    component: About
  }
];
