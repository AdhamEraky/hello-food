import { Component, OnInit } from '@angular/core';
import { ProductListService, Product } from 'src/app/products/components/product-list/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css' ,'./more-info.component.less'],
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
export class MoreInfoComponent implements OnInit {
  selectedId: number;
  showedProduct: Product;
  

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private productListService: ProductListService) {
      
      this.activatedRoute.params.subscribe(param => {
        this.selectedId = param.id;
      })
    }

  ngOnInit() {
    this.showedProduct = this.productListService.getProductById(this.selectedId)[0];
  }
}
