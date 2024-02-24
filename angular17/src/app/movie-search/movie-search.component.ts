import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';
import { Subject, of } from 'rxjs'; // Importa 'of' para retornar un observable vacío
import { takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  movies: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit() {
    console.log('Component initialized');
    this.activatedRoute.queryParams.pipe(
      takeUntil(this.destroy$),
      switchMap(params => {
        const searchTerm = params['searchTerm'];
        if (searchTerm) {
          this.searchTerm = searchTerm;
          console.log("Search term:", searchTerm); // Añade esto para depurar
          return this.searchService.searchMovies(searchTerm);
        } else {
          // Limpia los resultados previos y no realiza una búsqueda
          this.searchTerm = ''; // Limpia el término de búsqueda
          this.movies = []; // Limpia los resultados previos
          return of([]); // Retorna un observable vacío para cumplir con la firma del switchMap
        }
      })
    ).subscribe(movies => {
      this.movies = movies;
      console.log(this.movies);
    }, error => {
      console.error('Error fetching movies:', error); // Asegúrate de que este bloque de error esté presente
    });
    
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  searchMovies(term: string) {
    this.searchService.searchMovies(term).subscribe(movies => {
      this.movies = movies;
    });
  }
}
