// peliculas.component.ts
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

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
        // Accede a la propiedad 'results' del objeto de respuesta
        this.peliculas = data.results;
      },
      (error) => {
        console.error('Error al obtener las películas', error);
      }
    );
  }
}
