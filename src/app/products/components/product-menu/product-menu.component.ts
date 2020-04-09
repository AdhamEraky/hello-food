import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductMenuService } from './product-menu.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
  productsMenu;
  private selectedId ;
  @Output() productUrltoParent : EventEmitter<number>;
  @Output() resetAllProducts: EventEmitter<void> = new EventEmitter<void>();


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router:Router,
    private menuService: ProductMenuService,
  ) {
      this.productUrltoParent = new EventEmitter();
      this.activatedRoute.params.subscribe(param => {
        this.selectedId = param.id;
      });
   }

  ngOnInit() {
    this.productsMenu = this.menuService.getProductMenu();
  }

  onSelect(productId: number){
    this.productUrltoParent.emit(productId);
    this.router.navigate(['product', productId]);

  }
  
  showAllProducts() {
    this.router.navigate(['product']);
    this.resetAllProducts.emit();
  }
  

} 
