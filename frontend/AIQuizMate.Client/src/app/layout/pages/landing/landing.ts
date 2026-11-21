import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { Hero } from '../../component/hero/hero';

@Component({
  selector: 'app-landing',
  imports: [Navbar, Hero, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

}
  