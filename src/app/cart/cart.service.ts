import { Injectable } from '@angular/core';
import { Product, ProductListService } from '../products/components/product-list/product-list.service';

export interface CartItem { 
  product: Product;
  price:number;
  total:number;
  quantity:number;
}

export class Cart {
  total:number = 0;
  price:number = 0;
  quantity:number = 1;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  cart: Cart = new Cart();

  private products: Product[] = [];
  idSelected:number;
  constructor(private productService:ProductListService) {
   }

  removeItem(id: number){
    const removedProduct = this.products.findIndex(product => product.id === id);
    this.products.splice(removedProduct, 1);
  }

  addToCartPage(id:number){
    const result = this.productService.getProductById(id)[0];
    this.products.push(result);
    console.log(this.products);
  }

  returnProductToCart(){
    return this.products;
  }


}


