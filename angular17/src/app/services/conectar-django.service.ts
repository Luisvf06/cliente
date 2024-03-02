import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl= 'http://127.0.0.1:4999/api/v1';
const token='RKkRukBNcWPI4qQYnL74H6qrLyCJn1';
const headers={
  'Authorization':`Bearer ${token}`
}
@Injectable({
  providedIn: 'root'
})
export class ConectarDjangoService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<any[]>(`${baseUrl}/Huertos`,{headers})
  }
}
