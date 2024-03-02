//app.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './services/search.service'; // Importa el servicio
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  searchTerm: string = '';
  peliculasApi: any[] = [];
  listaFiltrada: any[] = [];

  constructor(private http: HttpClient, private router: Router, private searchService: SearchService) {} // Inyecta el servicio

  ngOnInit(): void {
    this.searchService.getPopularMovies().subscribe(movies => {
      this.peliculasApi = movies;
      this.listaFiltrada = movies;
  });
}
  searchMovies(searchTerm: string) {
    this.router.navigate(['/search'], { queryParams: { searchTerm: searchTerm } });
  }
  // Dentro de AppComponent

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
