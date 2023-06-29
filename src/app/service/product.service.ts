import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  add(data:any){
    return this.http.post('http://localhost:2628/products/add/',data)
  }

  update(data:any){
    return this.http.patch('http://localhost:2628/products/update/',data)
  }

  getProducts(){
    return this.http.get('http://localhost:2628/products/get/');
  }

  updateStatus(data:any){
    return this.http.patch('http://localhost:2628/products/updateStatus/',data)
  }

  delete(id:any){
    return this.http.delete('http://localhost:2628/products/delete/'+id);
  }

}
