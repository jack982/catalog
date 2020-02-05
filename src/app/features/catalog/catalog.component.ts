import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from './model/device';
import {CatalogService} from './services/catalog.service';
import {CatalogStore} from './services/catalog.store';

@Component({
  selector: 'app-catalog',
  template: `
    <div class="container">

    <h1>Catalog</h1>

     <app-catalog-form
        [active]="store.active"
            (save)="actions.save($event)"
            (reset)="actions.reset()"></app-catalog-form>

      <hr>

      <app-catalog-list
            [devices]="store.devices"
            [active]="store.active"
            (setActive)="actions.setActive($event)"
            (delete)="actions.deleteHandler($event)"
      ></app-catalog-list>
  `,
  styles: []
})
export class CatalogComponent {

  constructor(
    private actions: CatalogService,
    private store: CatalogStore) {
      actions.getAll();
  }

}
