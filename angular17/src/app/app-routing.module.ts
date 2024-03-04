import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'home', component: HomeComponent }, // Agrega una ruta específica para la página de inicio si es diferente de ''
  { path: 'movie-search', component: MovieSearchComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige al componente Home por defecto
  { path: '**', redirectTo: '/home' } // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
