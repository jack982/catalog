import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Device} from '../model/device';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-catalog-form',
  template: `


    <form #f="ngForm" (submit)="saveHandler()">

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
        <button class="btn btn-dark" type="submit">{{ active?.id ? 'Edit' : 'Save' }}</button>
        &nbsp;
        <button class="btn btn-warning" type="button" (click)="resetHandler()">Reset</button>
      </div>

    </form>

  `,
  styles: []
})
export class CatalogFormComponent implements OnChanges {

  @Input() active: Device;
  @Output() save: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() reset: EventEmitter<Device> = new EventEmitter<Device>();
  @ViewChild('f', {static: true}) form: NgForm;


  ngOnChanges(changes: SimpleChanges): void {
    const active: Device = changes.active.currentValue;
    if ( !active.id ) {
      this.form.reset();
    }
  }

  saveHandler() {
    this.save.emit(this.form.value);
  }
  resetHandler() {
    this.reset.emit();
    this.form.reset();
  }
}
