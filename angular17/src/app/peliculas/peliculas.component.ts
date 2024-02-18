import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private PeliculasService: PeliculasService, private router: Router) {}

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(): void {
    this.PeliculasService.getPeliculas().subscribe(
      (data: any) => {
        // Access the 'results' property of the response object
        this.peliculas = data.results;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener las películas', error);
      }
    );
  }

  verDetallesPelicula(id: number): void {
    this.PeliculasService.getDetallesPelicula(id).subscribe(
      (data: any) => {
        this.router.navigate(['/detalles', id]);
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener los detalles de la película', error);
      }
    );
  }
}