import { Component } from '@angular/core';
import { RopaService  } from '../ropa.service';
import { ArticuloService } from '../service/articulo.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [RopaService,ArticuloService],

})

export class HomeComponent {
  constructor( private _ropaService: RopaService){}

  ngOnInit(){
    console.log(this._ropaService.getRopa())
  }
}
