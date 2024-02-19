import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './search.service'; // Importa el servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  searchTerm: string = '';
  peliculasApi: any[] = [];
  listaFiltrada: any[] = [];

  constructor(private http: HttpClient, private searchService: SearchService) {} // Inyecta el servicio

  ngOnInit(): void {
    this.getPopularMovies();
  }

  search(): void {
    this.searchService.setSearchTerm(this.searchTerm); // Establece el término de búsqueda en el servicio
  }

  getPopularMovies(): void {
    this.http.get<any>('http://api.themoviedb.org/3/movie/now_playing?api_key=4431fed8390b02d6c28655feb536156a')
      .subscribe(response => {
        this.peliculasApi = response.results;
        this.listaFiltrada = this.peliculasApi;
      });
  }
}
