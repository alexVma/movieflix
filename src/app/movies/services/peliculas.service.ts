import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmQxN2E1MjdkNmMzMThlM2VhZmNiOWMxYTE4MTNhYyIsInN1YiI6IjVjZmE4MzAyOTI1MTQxNjczN2MxZWM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fjGIjIuVoHVrG1by8RjJ2g2rAzIxXOCEzkKV9AHPqg';

  httpOptions ={
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  };

  constructor(private http: HttpClient) {
  }

  obtenerPeliculas() {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      this.httpOptions);
  } 
}
