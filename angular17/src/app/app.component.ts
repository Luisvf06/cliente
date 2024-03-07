import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { SearchService } from './services/search.service';
import { WatchlistService } from './services/watchlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  peliculasApi: any[] = [];
  listaFiltrada: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private searchService: SearchService,
    private watchlistService: WatchlistService
  ) {} 

  ngOnInit(): void {
    this.getPopularMovies();
    this.getWatchlistMovies();
  }
  getWatchlistMovies(): void {
    this.watchlistService.getWatchlistMovies().subscribe((data: any) => {
      console.log(data.results);

      // Por ejemplo, podrías asignar las películas a una variable para mostrarlas en la plantilla
    }, error => {
      console.error('Error fetching watchlist movies', error);
    });
  }
  search() {
    this.router.navigate(['/movie-search'], { queryParams: { searchTerm: this.searchTerm } });
  }

  getPopularMovies(): void {
    this.http.get<any>('http://api.themoviedb.org/3/movie/now_playing?api_key=4431fed8390b02d6c28655feb536156a')
      .subscribe(response => {
        this.peliculasApi = response.results;
        this.listaFiltrada = this.peliculasApi;
      });
  }
}