import {Injectable} from '@angular/core';
import {Device} from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class CatalogStore {

  public devices: Device[];
  public active: Device = {};

  load(devices: Device[]) {
    this.devices = devices;
  }

  add(device: Device) {
    this.devices.push(device);
    this.active = {};
  }

  edit(device: Device) {
    const index = this.devices.findIndex(d => d.id === this.active.id);
    this.devices[index] = device;
  }

  delete(id: number) {
    const index = this.devices.findIndex(d => d.id === id);
    this.devices.splice(index, 1);
  }

  setActive(device: Device) {
    this.active = device;
  }

  reset() {
    this.active = {};
  }
}
