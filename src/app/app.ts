import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from "./components/header/header";
import {Seccion1} from "./components/seccion1/seccion1";
import {Seccion2} from "./components/seccion2/seccion2";
import { Seccion3 } from "./components/seccion3/seccion3";
import { Seccion4 } from "./components/seccion4/seccion4";
import { Seccion5 } from "./components/seccion5/seccion5";
import { Seccion6 } from "./components/seccion6/seccion6";
import { Seccion7 } from "./components/seccion7/seccion7";
import { Seccion8 } from "./components/seccion8/seccion8";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Seccion1, Seccion2, Seccion3, Seccion4, Seccion5, Seccion6, Seccion7, Seccion8, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Happiness');
}
