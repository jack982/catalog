import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-os-icon',
  template: `
    <i class="fa" [ngClass]="{
            'fa-android' : os === 'android',
            'fa-apple' : os === 'ios',
            'fa-question' : os == null
         }"></i>
  `,
  styles: []
})
export class OsIconComponent {

  @Input() os: string;


}
