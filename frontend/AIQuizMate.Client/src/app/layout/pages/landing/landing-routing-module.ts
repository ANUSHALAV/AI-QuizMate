import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing } from './landing';

const routes: Routes = [
  {
    path: '',
    component: Landing,
    children: [
      { path: '', loadComponent: () => import('../../component/hero/hero').then(m => m.Hero) },
      { path: 'about', loadComponent: () => import('../../component/about/about').then(m => m.About) },
      { path: 'feature', loadComponent: () => import('../../component/feature/feature').then(m => m.Feature) },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
