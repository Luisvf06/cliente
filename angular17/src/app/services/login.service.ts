import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiKey = '4431fed8390b02d6c28655feb536156a';
  private requestTokenUrl = 'https://api.themoviedb.org/3/authentication/token/new?api_key=' + this.apiKey;
  private validateWithLoginUrl = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';

  constructor(private http: HttpClient) { }

  // Paso 1: Solicitar un request_token
  getRequestToken(): Observable<any> {
    return this.http.get(this.requestTokenUrl);
  }

  // Paso 2: Validar el request_token con las credenciales del usuario
  validateTokenWithLogin(username: string, password: string, requestToken: string): Observable<any> {
    const body = {
      username: username,
      password: password,
      request_token: requestToken
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}` // Asumiendo que esta es la forma correcta de usar tu token de acceso, que es poco común para este tipo de operación.
    });

    return this.http.post(this.validateWithLoginUrl + '?api_key=' + this.apiKey, body, { headers });
  }
}
