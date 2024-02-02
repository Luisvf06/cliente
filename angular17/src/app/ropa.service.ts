import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public coleccionRopa = ['pantalones','camiseta']

  getRopa():Array<string>{
    return this.coleccionRopa;
  }
  constructor() { }
}
