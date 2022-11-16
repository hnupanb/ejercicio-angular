import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html'
})
export class ProductAlertsComponent  {

@Input() product!:Product;
@Output() notify = new EventEmitter();
}
