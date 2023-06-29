import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  responseMessage: any;
  data: any;
  product:any;

  constructor(private dashService: DashboardService, private router: Router,) {

    }
  ngOnInit() {
    this.dashboardData();
    this.productCount();
  }

  dashboardData() {
    this.dashService.getDetails().subscribe(
      (response: any) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  productCount(){
    this.dashService.getProductCount().subscribe(
      (res:any)=>{
        this.product = res;
        console.log(this.product);

      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
