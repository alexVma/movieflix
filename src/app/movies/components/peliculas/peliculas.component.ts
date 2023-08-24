import { Component } from '@angular/core';
import { PeliculasService } from './../../services/peliculas.service';
import { Pelicula } from './../../../core/models/pelicula/pelicula.model';
import { PeliculaResponse } from './../../../core/models/pelicula/pelicula-response.model';





@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas:Pelicula[];

  constructor(private peliculasService: PeliculasService) {
    this.peliculas=[];
  }

  ngOnInit():void {
    this.peliculasService.obtenerPeliculas().subscribe({
      next: (data:any) => {
        this.peliculas = data.results;
      }
    });
  
  }

}
