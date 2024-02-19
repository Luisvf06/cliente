//movie-search.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Movie {
  title: string;
  // Agrega otras propiedades según sea necesario
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchTerm: string = '';
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  search(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredMovies = this.movies;
    } else {
      this.filteredMovies = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  getPopularMovies(): void {
    this.http.get<any>('http://api.themoviedb.org/3/movie/now_playing?api_key=4431fed8390b02d6c28655feb536156a')
      .subscribe(response => {
        this.movies = response.results;
        this.filteredMovies = this.movies;
      }, error => {
        console.error('Error fetching movies:', error);
      });
  }
}
