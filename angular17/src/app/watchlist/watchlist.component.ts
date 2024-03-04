import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  movies: any[] = [];

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.getWatchlistMovies();
  }

  getWatchlistMovies(): void {
    this.watchlistService.getWatchlistMovies()
      .subscribe((data: any) => {
        this.movies = data.results;
        this.movies.sort((a, b) => b.vote_average - a.vote_average);
      }, error => {
        console.error('Error fetching watchlist movies', error);
      });
  }

  borrarPelicula(movieId: number): void {
    this.watchlistService.removeMovieFromWatchlist(movieId)
      .subscribe(response => {
        console.log('Movie removed successfully');
        this.getWatchlistMovies();
      }, error => {
        console.error('Error removing movie from watchlist', error);
      });
  }

  getMovieImageUrl(posterPath: string): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500/${posterPath}`;
    } else {
      return 'https://via.placeholder.com/150';
    }
  }

  // Define la función elegirPeli para manejar la selección de películas
  elegirPeli(movie: any): void {
    console.log('Película elegida:', movie);
    // Aquí puedes implementar la lógica que necesites cuando se elige una película
  }
}
