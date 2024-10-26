import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasApiService {

  private readonly apiUrl: string = 'https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100'
  constructor(private readonly http: HttpClient) {}

  obtenerPeliculas(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.apiUrl);
  } //Agregar Observable
}
