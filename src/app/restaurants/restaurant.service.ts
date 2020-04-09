import { Injectable } from '@angular/core';

export interface Restaurant  {
  id:number;
  name: string;
  email: string;
  contactPreference?: string;
  phone: string;
  address: string;
  specification: string;
  restaurantType: string;
  checkArray: Array<any>;
}

@Injectable({
  providedIn: 'root'
})


export class RestaurantService {
  
  private _restaurants: Restaurant[] = [];

  constructor() { }

addedRestaurant(restaurant: Restaurant): void {
  restaurant.id = this.genId(this._restaurants);
  this._restaurants.push(restaurant);
}


editedRestaurant(restaurant: Restaurant){
  console.log(restaurant);
  const index = this._restaurants.findIndex( x => x.id === restaurant.id);
  if (index !== -1) {
    this._restaurants[index] = restaurant;
  }
}


getRestaurantById(id:number) : Restaurant{
  const index = this._restaurants.findIndex( x => x.id === +id);
  return this._restaurants[index];
}


get restaurant(): Restaurant[] {
  return this._restaurants;
}


genId(restaurant: Restaurant[]): number {
  return restaurant.length > 0 ? Math.max(...restaurant.map(xRest => xRest.id)) + 1 : restaurant.length + 1 ;
}


removeRestaurant(id:number) {
  const removedRestaurant = this._restaurants.findIndex(xRest => xRest.id === id)
  this._restaurants.splice(removedRestaurant,1);
}
}
