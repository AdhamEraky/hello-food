import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-empty-page',
  templateUrl: './product-empty-page.component.html',
  styleUrls: ['./product-empty-page.component.css']
})
export class ProductEmptyPageComponent implements OnInit {
  
  
  @Input() selecteProducts;
  
  constructor() { }

  ngOnInit() {
  }
}
