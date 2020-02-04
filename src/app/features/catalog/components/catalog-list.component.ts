import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Device} from '../model/device';

@Component({
  selector: 'app-catalog-list',
  template: `
    <div class="list-group-item"
         [ngClass]="{ 'active' : device.id === active?.id }"
         *ngFor="let device of devices"
         (click)="setActive.emit(device)">
      <i class="fa" [ngClass]="{
            'fa-android' : device.os === 'android',
            'fa-apple' : device.os === 'ios'
         }"></i>
      {{ device.label }}
      <div class="pull-right">
        <i class="fa fa-trash" (click)="deleteHandler($event, device)"></i>
      </div>
    </div>
  `,
  styles: []
})
export class CatalogListComponent {
  @Input() devices: Device[];
  @Input() active: Device;
  @Output() setActive: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() delete: EventEmitter<Device> = new EventEmitter<Device>();

  deleteHandler(event: MouseEvent, device: Device) {
    event.stopPropagation();
    this.delete.emit(device);

  }
}
