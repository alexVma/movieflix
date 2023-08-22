import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) {
   }

  obtenerPeliculas() {
    return this.http.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
  } 
}
