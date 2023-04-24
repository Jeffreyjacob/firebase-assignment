import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'create',
    loadComponent: () => import('./pages/create/create.page').then( m => m.CreatePage)
  },
  {
    path: 'getincident',
    loadComponent: () => import('./pages/getincident/getincident.page').then( m => m.GetincidentPage)
  },
];
