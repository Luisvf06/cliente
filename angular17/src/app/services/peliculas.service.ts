import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(): void {
    this.peliculasService.getPeliculas().subscribe(
      (data: any) => {
        this.peliculas = data.results;
      },
      (error) => {
        console.error('Error al obtener las películas', error);
      }
    );
  }

  getPeliculaId(index: number): number {
    if (index >= 0 && index < this.peliculas.length) {
      return this.peliculas[index].id;
    } else {
      return -1; // Devuelve -1 si el índice está fuera de rango
    }
  }

  getDetallesPelicula(id: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4431fed8390b02d6c28655feb536156a`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  
}
