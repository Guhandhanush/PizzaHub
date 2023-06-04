import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsigninComponent } from './dialogsignin/dialogsignin.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza';
  cartquantity=0;

  constructor(private dialog:MatDialog,cartservice:CartService){
    cartservice.getcartObservable().subscribe((newCart)=>{
      this.cartquantity = newCart.totalCount;
    })
  }

  open(){
    this.dialog.open(DialogsigninComponent,{
      width:'60%'
    })
  }
}
