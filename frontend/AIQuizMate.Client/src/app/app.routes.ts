import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./layout/pages/landing/landing').then(m => m.Landing) }
];
