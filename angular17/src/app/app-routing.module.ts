// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { navbar} from './navbar/navbar.component'


const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'peliculas', component: PeliculasComponent },
  /*{ 
    path: 'detalles', 
    component: navbar, // Asegúrate de tener un componente para la barra de navegación en la página principal
    children: [
      { path: 'detalles/:id', component: DetallesComponent }
    ]
  },*/
  { path: '/detalles/:id', component: DetallesComponent },
  // Otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
