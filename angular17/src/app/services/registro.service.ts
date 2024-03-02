import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroUsuario } from '../models/registro-usuario.model'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:4999/registrar/usuario'; 

  constructor(private http: HttpClient) {}

  registrar(usuario: RegistroUsuario): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, usuario);
  }
}
