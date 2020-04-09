import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLayOutComponent } from './product-layout/product-layout.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { ProductsComponent } from './products.component';
import { ShowedProductComponent } from './components/showed-product/showed-product.component';

const routes: Routes = [
    {
      path: '',
      component: ProductLayOutComponent,
      children: [
        {
          path: ':id',
          component: ShowedProductComponent
        },
      ]
    },
    {
      path:"more-info/:id", component: MoreInfoComponent
    },  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule { }
  