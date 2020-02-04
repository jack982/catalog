import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Device} from '../model/device';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-catalog-form',
  template: `


    <form #f="ngForm" (submit)="saveHandler(f)">

      <div class="form-group">
        <label for="label">Label</label>
        <input class="form-control" type="text" name="label" [ngModel]="active?.label" placeholder="Device" required>
      </div>
      <div class="form-group">
        <label for="label">Price</label>
        <input class="form-control" type="number" name="price" [ngModel]="active?.price" placeholder="Price">
      </div>
      <div class="form-group">
        <label for="label">OS</label>
        <select class="form-control" name="os" [ngModel]="active?.os">
          <option value="android">Android</option>
          <option value="ios">iOS</option>
        </select>
      </div>

      <div class="button-group">
        <button class="btn btn-dark" type="submit">{{ active ? 'Edit' : 'Save' }}</button>
        &nbsp;
        <button class="btn btn-warning" type="button" (click)="resetHandler(f)">Reset</button>
      </div>

    </form>

  `,
  styles: []
})
export class CatalogFormComponent  {

  @Input() active: Device;
  @Output() save: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() reset: EventEmitter<Device> = new EventEmitter<Device>();


  saveHandler(form: NgForm) {
    this.save.emit(form.value);
    if ( !this.active ) {
      form.reset();
    }

  }
  resetHandler(form: NgForm) {
    this.reset.emit();
    form.reset();
  }
}
