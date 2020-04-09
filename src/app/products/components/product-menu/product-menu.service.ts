import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductMenuService {

  getProductMenu(){
    return [
     { id : 1 , name: ' Bakery'},
     { id : 2 , name: ' Takeaway'},
     { id : 3 , name: ' Dairy'},
     { id : 4 , name: ' Meat'},
     { id : 5 , name: ' Seafood'},
     { id : 6 , name: ' Fruit & Veg'},
     { id : 7 , name: ' Hot Drinks'},
     { id : 8 , name: ' Fresh Drinks'},
     { id : 9 , name: ' Cocktails'},

    ]
}
  constructor() { }
}
