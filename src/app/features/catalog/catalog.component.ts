import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from './model/device';

@Component({
  selector: 'app-catalog',
  template: `
    <div class="container">

    <h1>Catalog</h1>

     <app-catalog-form
        [active]="active"
            (save)="save($event)"
            (reset)="reset()"></app-catalog-form>

      <hr>

      <app-catalog-list
            [devices]="devices"
            [active]="active"
            (setActive)="setActive($event)"
            (delete)="deleteHandler($event)"
      ></app-catalog-list>
  `,
  styles: []
})
export class CatalogComponent {

  devices: Device[];
  active: Device;

  constructor(private http: HttpClient) {
    this.getAll();
  }

  setActive(device: Device) {
    this.active = device;
  }

  getAll() {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe(result => this.devices = result);
  }

  deleteHandler(device: Device) {
    this.http.delete(`http://localhost:3000/devices/${device.id}`)
      .subscribe(() => {
        const index = this.devices.findIndex(d => d.id === device.id);
        this.devices.splice(index, 1);
      });
  }

  save(device: Device) {
    if (this.active) {
      this.edit(device);
    } else {
      this.add(device);
    }
  }

  add(device: Device) {
    this.http.post<Device>(`http://localhost:3000/devices/`, device)
      .subscribe(result => {
        this.devices.push(result);
        this.active = null;
        //form.reset();
      });
  }

  edit(device: Device) {
    this.http.patch<Device>(`http://localhost:3000/devices/${this.active.id}`, device)
      .subscribe(res => {
        const index = this.devices.findIndex(d => d.id === this.active.id);
        this.devices[index] = res;
      });
  }


  reset() {
    this.active = null;
   // form.reset();
  }



}
