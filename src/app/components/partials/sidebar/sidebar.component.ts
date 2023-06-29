import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard.service';
import jwt_decode from 'jwt-decode';
import { MenuItems } from 'src/app/shared/interfaces/menu-items';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  responseMessage: any;
  data: any;
  
  tokenPayload: any;

  constructor(private dashService: DashboardService, private router: Router,) {

    }
  ngOnInit() {
    this.dashboardData();
  }

  dashboardData() {
    this.dashService.getDetails().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
