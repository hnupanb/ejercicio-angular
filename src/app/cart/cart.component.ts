import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent  {
  items= this.cartService.getItems();

   checkoutForm = this.formBuilder.group({
     name:'',
     address:''
   })
  constructor (
    private cartService:CartService,
    private formBuilder: FormBuilder,
     ){ }

     onSubmit():void {
       this.items = this.cartService.clearCart();
       console.warn('your order has been submited',this.checkoutForm.value);
       this.checkoutForm.reset();

     }
}
