import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { Hero } from '../../component/hero/hero';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

}
  