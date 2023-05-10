import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OrdernowComponent } from '../ordernow/ordernow.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private dialog:MatDialog){}


  ordernow(){
    this.dialog.open(OrdernowComponent,{
      width:'40%'
    })
  }
}
