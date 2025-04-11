import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent() {
      return import('./login/login.component').then((m) => m.LoginComponent);
    },
  },
  {
    path: 'eventList',
    loadComponent() {
      return import('./events-table/events-table.component').then(
        (m) => m.EventsTableComponent
      );
    },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
