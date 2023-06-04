import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:tag[];
  constructor(foodservice:FoodService){
    foodservice.getalltags().subscribe(sub =>{
      this.tags = sub;
    });
  }
}
