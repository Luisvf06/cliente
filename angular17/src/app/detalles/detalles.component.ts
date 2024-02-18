import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  pelicula: any;
  public id:number;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { 
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? Number(idParam) : -1;
  }

  ngOnInit(): void {
    this.peliculasService.getPelicula(this.id).subscribe((movie) => {
      this.pelicula = movie;
    });
  }

  getPeliculaDetalle(): void {
    // Obtén el ID de la película desde los parámetros de la ruta
    
    // Llama al servicio para obtener los detalles de la película por su ID
    this.peliculasService.getPelicula(this.id).subscribe(
      (data: any) => {
        this.pelicula = data;
      },
      (error) => {
        console.error('Error al obtener los detalles de la película', error);
      }
    );
  }
}