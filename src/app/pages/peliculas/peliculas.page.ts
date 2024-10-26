import { Component, OnInit } from '@angular/core';
import { PeliculasApiService } from 'src/app/services/peliculas-api.service';
import { Pelicula } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  peliculas: Pelicula[]=[];
  path: string = 'https://image.tmdb.org/t/p//w500//';
  constructor(private readonly service: PeliculasApiService) {}

  ngOnInit() {

    const peliculas = localStorage.getItem('peliculas');
    if(peliculas){
      this.peliculas=JSON.parse(peliculas);
    } else {
      this.service.obtenerPeliculas().subscribe((data: Pelicula[]) => {
        this.peliculas = data;
        localStorage.setItem('peliculas', JSON.stringify(data));
      })
    }
  }
}