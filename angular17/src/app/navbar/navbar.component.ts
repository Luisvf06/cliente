import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'; 
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.scss']
})
export class NavbarComponent {
  watchlist = '/watchlist';

  constructor(private router: Router, private peliculasService: PeliculasService) {}

  searchMovies(searchTerm: string): void {
    if (searchTerm) {
      fromEvent(document, 'keyup')
        .pipe(
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(event => this.peliculasService.searchMovies(searchTerm))
        )
        .subscribe(
          movies => {
            // Handle the search results (movies) here.
            console.log('Search results:', movies);
          },
          error => {
            console.error('Error searching movies:', error);
          }
        );
    }
  }
}