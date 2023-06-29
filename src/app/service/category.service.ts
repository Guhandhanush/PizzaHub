import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  add(data:any){
  return this.http.post('http://localhost:2628/category/add/',data);
  }
  update(data:any){
  return this.http.patch('http://localhost:2628/category/update/',data);
  }

  getCategory(){
    return this.http.get('http://localhost:2628/category/get/');
  }
}
