import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get<any>('http://localhost:2628/category/count');
  }

  getProductCount(){
    return this.http.get<any>('http://localhost:2628/products/count');
  }
}
