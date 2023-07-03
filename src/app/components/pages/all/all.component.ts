import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  foods: Food[] = [];
  food!: Food;
  Product: Food[] = [];
  constructor(
    private foodservice: FoodService,
    activateRoute: ActivatedRoute,
    private cartservice: CartService,
    private router: Router,
    private api: ApiService
  ) {
    activateRoute.params.subscribe((params) => {
      if (params['search'])
        this.foods = this.foodservice.getallfoodsbysearch(params['search']);
      else if (params['tag'])
        this.foods = this.foodservice.getallfoodsbytag(params['tag']);
      else this.foods = foodservice.getall();
    });
  }
  ngOnInit(): void {
    this.getProduct();
  }

  addtocart() {
    this.cartservice.addtocart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  getProduct() {
    this.api.getProducts().subscribe({
      next: (data) => {
        this.Product = data;
      },
    });
  }
}
