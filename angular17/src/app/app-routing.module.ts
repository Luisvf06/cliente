// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { DetallesComponent } from './detalles/detalles.component';
//import { navbar} from './navbar/navbar.component'
const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'pelicula/:id', component:DetallesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
