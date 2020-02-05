import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price',
  template: `
    <span
      [style.color]="price > 500 ? 'red' : 'green'">
          {{price | number: '1.2-2' }}
    </span>
  `,
  styles: []
})
export class PriceComponent {

  @Input() price: number;

}
