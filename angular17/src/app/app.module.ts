import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CochesComponent } from './coches/coches.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { HomeComponent } from './home/home.component';
import { ArticuloComponent } from './articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CochesComponent,
    EjemploComponent,
    HomeComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
