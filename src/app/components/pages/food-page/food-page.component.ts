import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  constructor(activateRoute:ActivatedRoute,foodservice:FoodService,
    private cartservice:CartService,
    private router:Router){
    activateRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodservice.getfoodbyid(params['id']);
    })
  }
 
  addtocart(){
    this.cartservice.addtocart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
