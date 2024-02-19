// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculasService } from './services/peliculas.service';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    CarruselComponent,
    NavbarComponent,
    DetallesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule, // Configura correctamente RouterModule
    AppRoutingModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
