import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  search='';
  constructor(activatedRoute:ActivatedRoute,private route:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['search']) this.search=params['search'];
    })
  }


  searches(term:string):void{
    if(term)
    this.route.navigateByUrl('/search/'+ term)
  }
}
