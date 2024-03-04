import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private account_id = '20930787';
  private apiKey = '4431fed8390b02d6c28655feb536156a'; // Agrega tu clave de API aquí

  constructor(private http: HttpClient) { }

  getWatchlistMovies(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.get<any>(`https://api.themoviedb.org/3/account/${this.account_id}/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`, { headers });
  }

  removeMovieFromWatchlist(movieId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: false
    };

    return this.http.post<any>(`https://api.themoviedb.org/3/account/${this.account_id}/watchlist`, body, { headers });
  }
}
