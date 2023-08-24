import { Component } from '@angular/core';
import {Pelicula} from './../../../core/models/pelicula/pelicula.model';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  pelicula: Pelicula | null;

  constructor() {
   this.pelicula= null;
  }

 ngOnInit(): void {
  
 }

}
