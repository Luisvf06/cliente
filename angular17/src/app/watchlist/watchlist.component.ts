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
      .subscribe((data: any) => { // Especifica el tipo de data como any
        this.movies = data.results;
        this.movies.sort((a, b) => b.vote_average - a.vote_average);
      }, error => {
        console.error('Error fetching watchlist movies', error);
      });
  }
  

  removeMovie(movieId: number): void {
    this.watchlistService.removeMovieFromWatchlist(movieId)
      .subscribe(response => {
        console.log('Movie removed successfully');
        this.getWatchlistMovies();
      }, error => {
        console.error('Error removing movie from watchlist', error);
      });
  }
}
