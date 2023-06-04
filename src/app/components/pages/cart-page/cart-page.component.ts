import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Cartitem } from 'src/app/shared/models/Cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!:Cart;

  constructor(private cartservice:CartService){
    this.cartservice.getcartObservable()
    .subscribe((cart)=>{
      this.cart = cart;
    })
  }

  removefromcart(cartitem:Cartitem){
    this.cartservice.removefromcart(cartitem.food.id);
  }

  changequantity(cartitem:Cartitem,quantityInstring:string){
    const quantity = parseInt(quantityInstring);
    this.cartservice.chanequantity(cartitem.food.id,quantity);
  }

  
}
