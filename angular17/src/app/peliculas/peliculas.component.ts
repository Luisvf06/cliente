import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private peliculasService: PeliculasService, private router: Router) {}

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(): void {
    this.peliculasService.getPeliculas().subscribe(
      (data: any) => {
        // Accede a la propiedad 'results' del objeto de respuesta
        this.peliculas = data.results;
      },
      (error) => {
        console.error('Error al obtener las películas', error);
      }
    );
  }

  verDetallesPelicula(id: number): void {
    this.peliculasService.getDetallesPelicula(id).subscribe(
      (data: any) => {
        this.router.navigate(['/detalles', id]);
      },
      (error) => {
        console.error('Error al obtener los detalles de la película', error);
      }
    );
  }
}
