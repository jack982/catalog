import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CatalogListComponent } from './features/catalog/components/catalog-list.component';
import { CatalogFormComponent } from './features/catalog/components/catalog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogListComponent,
    CatalogFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
