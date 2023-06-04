import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { Cartitem } from '../shared/models/Cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getcartfromlocalstorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addtocart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem)
    return;
    this.cart.items.push(new Cartitem(food));
    this.setCarttoLocalstorage();
  }

  removefromcart(foodId:string):void{
    this.cart.items = this.cart.items.filter(item=> item.food.id !=foodId);
    this.setCarttoLocalstorage();
  }

  chanequantity(foodid:string,quantity:number){
    let cartItem = this.cart.items.find(item=> item.food.id === foodid);
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity*cartItem.food.price;
    this.setCarttoLocalstorage();
  }

  clearcart(){
    this.cart = new Cart();
    this.setCarttoLocalstorage();
  }

  getcartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCarttoLocalstorage():void{
    this.cart.totalPrice = this.cart.items
     .reduce((prevsum,currentItem)=>prevsum+currentItem.price,0);
     this.cart.totalCount = this.cart.items
     .reduce((prevsum,currentitem)=> prevsum+currentitem.quantity,0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);

    this.cartSubject.next(this.cart);
  }

  private getcartfromlocalstorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }

}
