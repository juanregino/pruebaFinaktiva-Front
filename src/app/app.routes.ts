import { Routes } from '@angular/router';
import { EventsTableComponent } from './events-table/events-table.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent() {
      return import('./login/login.component').then((m) => m.LoginComponent);
    },
  },
  {
    path: 'eventList',
    component: EventsTableComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
