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
import { FormsModule} from '@angular/forms';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    CarruselComponent,
    NavbarComponent,
    DetallesComponent,
    HomeComponent,
    MovieSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule, // Configura correctamente RouterModule
    AppRoutingModule,
    FormsModule,
  ],
  providers: [PeliculasService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
