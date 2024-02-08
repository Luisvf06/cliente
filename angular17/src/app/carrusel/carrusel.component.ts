// carrusel.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
  apiKey: string = '4431fed8390b02d6c28655feb536156a';
  bearerToken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDMxZmVkODM5MGIwMmQ2YzI4NjU1ZmViNTM2MTU2YSIsInN1YiI6IjY1YThmOTNlYzRmNTUyMDEyNzhlNjU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nArKWLxihtW5aycNC-GAqUwF7JGeo_Rj13o_5ZA7K3w';
  movies: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMoviesUrlApi();
  }

  getMoviesUrlApi(): void {
    this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey)
      .subscribe(data => {
        this.movies = data.results.slice(0, 3);
      });
  }

  getMovieImageUrl(posterPath: string): string {
    if (posterPath) {
      return 'https://image.tmdb.org/t/p/w500/' + posterPath;
    }
    return '';
  }
}