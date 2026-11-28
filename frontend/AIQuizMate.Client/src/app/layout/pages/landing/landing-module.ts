import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing-module';
import { Landing } from './landing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Landing,
    LandingRoutingModule
  ]
})
export class LandingModule { }
