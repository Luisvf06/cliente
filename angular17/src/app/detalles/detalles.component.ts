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
  public id:Number;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    console.log("hola")
    this.getPeliculaDetalle();
  }

  getPeliculaDetalle(): void {
    // Obtén el ID de la película desde los parámetros de la ruta
    
    // Llama al servicio para obtener los detalles de la película por su ID
    this.peliculasService.getPelicula(Number(this.id)).subscribe(
      (data: any) => {
        this.pelicula = data;
      },
      (error) => {
        console.error('Error al obtener los detalles de la película', error);
      }
    );
  }
}
