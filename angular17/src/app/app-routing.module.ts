// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { NavbarComponent} from './navbar/navbar.component'
import { PeliculasService } from './services/peliculas.service';
import { HomeComponent } from './home/home.component'
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: '',component: HomeComponent},
  { path: 'search', component: MovieSearchComponent },
  /*{ 
    path: 'detalles', 
    component: navbar, // Asegúrate de tener un componente para la barra de navegación en la página principal
    children: [
      { path: 'detalles/:id', component: DetallesComponent }
    ]
  },*/
  { path: 'detalles/:id', component: DetallesComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
