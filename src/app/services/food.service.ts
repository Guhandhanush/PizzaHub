import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from '../data';
import { tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from '../shared/constants/urs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getall(): Food[] {
    return sample_foods;
  }

  getallfoodsbysearch(search: string) {
    return this.getall().filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  getalltags(): tag[] {
    return sample_tags;
    /* return this.http.get<tag[]>(FOODS_TAGS_URL) */
  }

  getallfoodsbytag(tag: string): Food[] {
    return tag === 'All'
      ? this.getall()
      : this.getall().filter((food) => food.tags?.includes(tag));
    /* this.http.get<Food[]>(FOODS_BY_TAG_URL+tag);  */
  }

  getfoodbyid(foodid: string) {
    /* return this.http.get<Food>(FOODS_BY_ID_URL + foodid) */
    return this.getall().find((food) => food.id == foodid) ?? new Food();
  }
}
