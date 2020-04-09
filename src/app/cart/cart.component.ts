import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../products/components/product-list/product-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  quantity : number = 1 ;
  total : number = 0 ; 

  cartItems: Product[];

  constructor(private cartService : CartService) {
   }

  ngOnInit() {
    this.cartItems = this.cartService.returnProductToCart();
  }

  removeItem(id: number){
    this.cartService.removeItem(id);
  }

  clearData(){
    this.cartItems= [];  
  }
}


