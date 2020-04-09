import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService} from 'src/app/cart/cart.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-showed-product',
  templateUrl: './showed-product.component.html',
  styleUrls: ['./showed-product.component.css'],
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
export class ShowedProductComponent implements OnInit {

  @Input() selecteProducts;

  @Input() id;
  @Input() title;
  @Input() description;
  @Input() img;
  @Input() price;

  constructor( 
    private cartService:CartService,
    private router:Router) { }

  ngOnInit() {
  }
  
  onSelect(){
    this.router.navigate(['product', 'more-info', this.id]);

  }

  addToCart(){
    this.cartService.addToCartPage(this.id);
  }

}


