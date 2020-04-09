import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { CheckoutLayoutComponent } from './checkout-layout/checkout-layout.component';

const routes: Routes = [
    {
      path: '',
      component: CheckoutLayoutComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CheckoutRoutingModule { }
  
