import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService, Restaurant } from './restaurant.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations: [
    trigger('fade', [ 

      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ]),

      transition('* => void', [
      animate(1000, style({opacity: 0 }))
      ]),
    ]),
  ],
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];
  constructor(
    private router:Router,
    private restaurantsService: RestaurantService
    ) {
      this.restaurants = this.restaurantsService.restaurant
     }

  ngOnInit() {
  }

  edit(id:number){
    console.log(id);
    this.router.navigate(['/restaurant/edit',id]);
  }

  removeRest(id:number){
    this.restaurantsService.removeRestaurant(id)
  }
}
