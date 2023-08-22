import { Component } from '@angular/core';
import { PeliculasService } from './../../services/peliculas.service';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas:any;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit():void {
    this.peliculasService.obtenerPeliculas().subscribe({
      next: (data) => {
        this.peliculas = data;
      }
    });
  
  }

}
