// watchlist.component.ts
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
      }, (error: any) => { // Especifica el tipo de error como any o el tipo adecuado si lo conoces
        console.error('Error fetching watchlist movies', error);
      });
  }
  
  
}
