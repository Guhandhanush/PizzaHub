import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OrdernowComponent } from '../ordernow/ordernow.component';
import { ApiService } from '../service/api.service';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  food!:Food[];
  constructor(private dialog:MatDialog, private api:ApiService,private foodService:FoodService){}
  ngOnInit(): void {
    this.getProduct();
    this.food=this.getFood();
  }

product!:any;
  ordernow(){
    this.dialog.open(OrdernowComponent,{
      width:'40%'
    })
  }

  getProduct(){
    this.api.getProducts().subscribe({
      next: (data) => {
        this.product = data;
      }
    })
  }

  getFood(){
    return this.foodService.getall();
  }
}
