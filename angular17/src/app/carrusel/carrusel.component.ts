// carrusel.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: true } }
  ]
})
export class CarruselComponent implements OnInit {
  apiKey = '4431fed8390b02d6c28655feb536156a';
  movies: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMoviesUrlApi();
  }

  getMoviesUrlApi(): void {
    this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
      .subscribe(
        (data) => {
          this.movies = data.results.slice(0, 3);
        },
        (error) => {
          console.error('Error al obtener las películas', error);
        }
      );
  }

  getMovieImageUrl(posterPath: string): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500/${posterPath}`;
    }
    return ''; // Puedes proporcionar una URL de respaldo si no hay posterPath
  }
}
