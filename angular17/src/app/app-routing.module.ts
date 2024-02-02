import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ArticuloComponent } from './articulo/articulo.component';
const routes: Routes = [{path:'home',component:HomeComponent},
{path: 'articulo',component:ArticuloComponent},
{path:'',component:HomeComponent},
{path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
