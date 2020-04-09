import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FormComponent } from './components/form/form.component';
import { InformationComponent } from './components/information/information.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutLayoutComponent } from './checkout-layout/checkout-layout.component';

@NgModule({
    imports: [
      CommonModule,
      CheckoutRoutingModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    declarations: [
      CheckoutComponent,
      FormComponent,
      InformationComponent,
      CheckoutLayoutComponent,
    ],
  })
  export class CheckoutModule { }