import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '4431fed8390b02d6c28655feb536156a';
  private token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDMxZmVkODM5MGIwMmQ2YzI4NjU1ZmViNTM2MTU2YSIsInN1YiI6IjY1YThmOTNlYzRmNTUyMDEyNzhlNjU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nArKWLxihtW5aycNC-GAqUwF7JGeo_Rj13o_5ZA7K3w';
  constructor(private http: HttpClient) {}

  getRequestToken(): Observable<any> {
    return this.http.get(`${this.baseUrl}/authentication/token/new?api_key=${this.apiKey}`);
  }

  validateWithLogin(username: string, password: string, requestToken: string): Observable<any> {
    const body = {
      username,
      password,
      request_token: requestToken,
    };
    return this.http.post(`${this.baseUrl}/authentication/token/validate_with_login?api_key=${this.apiKey}`, body);
  }

  createSessionId(requestToken: string): Observable<any> {
    const body = {
      request_token: requestToken,
    };
    return this.http.post(`${this.baseUrl}/authentication/session/new?api_key=${this.apiKey}`, body);
  }
}
