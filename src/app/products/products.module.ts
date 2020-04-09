import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductLayOutComponent } from './product-layout/product-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { QuickShopComponent } from './components/quick-shop/quick-shop.component';
import { ProductMenuComponent } from './components/product-menu/product-menu.component';
import { ProductEmptyPageComponent } from './components/product-empty-page/product-empty-page.component';
import { ShowedProductComponent } from './components/showed-product/showed-product.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { ProductsComponent } from './products.component';
import { QuestionsComponent } from './components/more-info/questions/questions.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      ProductsRoutingModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    declarations: [
      ProductLayOutComponent,
      ProductListComponent,
      QuickShopComponent,
      ProductMenuComponent,
      ProductEmptyPageComponent,
      ShowedProductComponent,
      MoreInfoComponent,
      ProductsComponent,
      QuestionsComponent,
    ],
    providers:[ 
    ]
  })
  export class ProductsModule { }