import { Component, OnInit } from '@angular/core';
import { ProductListService, Product } from '../components/product-list/product-list.service';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.css']
})
export class ProductLayOutComponent implements OnInit {
  products;
  showedProducts: Product[];

  constructor(
    private productService: ProductListService) {}
  

  
  ngOnInit() {
    this.resetProducts();

  }
  resetProducts() {
    this.showedProducts = this.productService.getProduct();

  }

  productWasSelected(event){
    this.showedProducts = this.productService.getProductByCategoryId(event);
  }

  searchToParentToChild(event){
    this.showedProducts = this.productService.searchBox(event);
  }


  
}
  