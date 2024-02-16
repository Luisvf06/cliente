import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service'; // Importa el servicio

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  pelicula: any;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {
    this.getPeliculaDetalle();
  }

  getPeliculaDetalle(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const id = idString ? +idString : 0; // Si idString es nulo, asigna 0 como valor por defecto
  
    this.peliculasService.getPelicula(id).subscribe(
      (data: any) => {
        this.pelicula = data;
      },
      (error) => {
        console.error('Error al obtener los detalles de la película', error);
      }
    );
  }
  
  
}
