import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from '../data';
import { tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urs';



@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http:HttpClient) { }


  getall(): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getallfoodsbysearch(search:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL+search);
  }

  getalltags(): Observable<tag[]>{
    return this.http.get<tag[]>(FOODS_TAGS_URL)
  }

  getallfoodsbytag(tag:string):Observable<Food[]>{
    return tag === 'All'?
    this.getall():
    this.http.get<Food[]>(FOODS_BY_TAG_URL+tag);
  }

  getfoodbyid(foodid:string):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL + foodid)
  }

  }


