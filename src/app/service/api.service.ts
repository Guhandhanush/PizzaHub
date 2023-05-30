import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postusers(data : any){
    return this.http.post<any>("http://localhost:3003/regusers", data);
  }

  getusers(){
    return this.http.get<any>("http://localhost:3003/register");
  }
}
