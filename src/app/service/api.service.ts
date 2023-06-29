import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postusers(data: any) {
    return this.http.post<any>('http://localhost:2628/register', data);
  }

  getusers() {
    return this.http.get<any>('http://localhost:2628/users');
  }

  getProducts() {
    return this.http.get<any>('http://localhost:2628/products');
  }

  signup(data: any) {
    return this.http.post('http://localhost:2628/register', data);
  }

  forgotPassword(data: any) {
    return this.http.post(
      'http://localhost:2628/register/forgotpassword',
      data
    );
  }

  login(data: any) {
    return this.http.post('http://localhost:2628/register/login', data);
  }

  checkToken() {
    return this.http.get('http://localhost:2628/register/checkToken');
  }
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }

  changePassword(data:any){
    return this.http.post('http://localhost:2628/register/changePassword',data);
  }
}
