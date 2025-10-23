import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from "./components/header/header";
import {Seccion1} from "./components/seccion1/seccion1";
import {Seccion2} from "./components/seccion2/seccion2";
import { Seccion3 } from "./components/seccion3/seccion3";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Seccion1, Seccion2, Seccion3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Happiness');
}
