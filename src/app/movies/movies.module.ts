import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SharedModule  } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    PeliculaComponent,
    PeliculasComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  
  ]
})
export class MoviesModule { }
