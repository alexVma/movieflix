import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  apiUrl = environment.apiUrl;

  httpOptions ={
    headers: new HttpHeaders({
      'Authorization': `Bearer ${environment.apiKey}`
    })
  };

  constructor(private http: HttpClient) {
  }

  obtenerPeliculas() {
    return this.http.get(
      this.apiUrl+'/trending/movie/day?language=en-US',
      this.httpOptions);
  } 
}
