import { Component } from '@angular/core';
import {Empleado} from './empleado'
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})
export class EmpleadoComponent {
  public title = "Bienvenido empleado";
  public empleado:Empleado ;

  constructor(){
    this.empleado=new Empleado("Luis",29)
  }
  ngOnInit(){
    console.log(this.empleado)
  }
}
