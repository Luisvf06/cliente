//search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4431fed8390b02d6c28655feb536156a&query=${searchTerm}`;
    return this.http.get<any>(url).pipe(
      map(data => data.results) // Procesa la respuesta para devolver solo los resultados
    );
  }
  
}