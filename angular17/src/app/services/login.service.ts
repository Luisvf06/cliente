import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiKey = '4431fed8390b02d6c28655feb536156a';
  private accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDMxZmVkODM5MGIwMmQ2YzI4NjU1ZmViNTM2MTU2YSIsInN1YiI6IjY1YThmOTNlYzRmNTUyMDEyNzhlNjU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nArKWLxihtW5aycNC-GAqUwF7JGeo_Rj13o_5ZA7K3w';
  private requestTokenUrl = `https://api.themoviedb.org/3/authentication/token/new?api_key=${this.apiKey}`;
  private validateWithLoginUrl = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${this.apiKey}`;
  private sessionUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  // Utiliza HttpHeaders para incluir el token de acceso en las solicitudes que lo requieran
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
  }

  // Paso 1: Solicitar un request_token
  getRequestToken(): Observable<any> {
    return this.http.get(this.requestTokenUrl, this.getHttpOptions());
  }

  // Paso 2: Validar el request_token con las credenciales del usuario
  validateTokenWithLogin(username: string, password: string, requestToken: string): Observable<any> {
    const body = { username, password, request_token: requestToken };
    return this.http.post(this.validateWithLoginUrl, body, this.getHttpOptions());
  }

  // Paso 3: Crear un ID de sesión
  createSessionId(requestToken: string): Observable<any> {
    const body = { request_token: requestToken };
    return this.http.post(this.sessionUrl, body, this.getHttpOptions());
  }
}
