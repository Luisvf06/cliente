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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SearchService } from './services/search.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    CarruselComponent,
    NavbarComponent,
    DetallesComponent,
    HomeComponent,
    MovieSearchComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule, // Configura correctamente RouterModule
    AppRoutingModule,
    FormsModule,ReactiveFormsModule 
  ],
  providers: [PeliculasService, SearchService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
