import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SharedModule  } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesRoutingModule } from './movies-routing.module';


@NgModule({
  declarations: [
    PeliculaComponent,
    PeliculasComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  
  ]
})
export class MoviesModule { }
