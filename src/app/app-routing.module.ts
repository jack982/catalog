import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './features/catalog/catalog.component';


const routes: Routes = [
  { path: 'catalog' , component: CatalogComponent },
  { path: '**', redirectTo: 'catalog'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
