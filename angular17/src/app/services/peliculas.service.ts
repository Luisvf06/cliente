import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=4431fed8390b02d6c28655feb536156a';

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPelicula(id: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4431fed8390b02d6c28655feb536156a`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDetallesPelicula(id: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4431fed8390b02d6c28655feb536156a`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  searchMovies(searchTerm: string): Observable<any> {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=4431fed8390b02d6c28655feb536156a&query=${searchTerm}`;
    return this.http.get<any>(searchUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
}