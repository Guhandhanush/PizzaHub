import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrdernowComponent } from '../ordernow/ordernow.component';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {

  constructor(private dialog:MatDialog){
  }

  ordernow(){
    this.dialog.open(OrdernowComponent,{
      width:'40%'
    })
  }
}
