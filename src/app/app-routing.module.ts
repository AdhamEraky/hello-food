import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './_helper/auth.guard';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreateComponent } from './restaurants/create/create.component';
import { EditComponent } from './restaurants/edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path:'product',
    loadChildren: () => import('./products/products.module')
    .then(m => m.ProductsModule),
    canActivate: [AuthGaurd],
    data: { title: 'Product List' }
  },

  {
    path:'check-out',
    loadChildren: () => import('./checkout/checkout.module')
    .then(m => m.CheckoutModule),
    canActivate: [AuthGaurd]
  },
  {
    path:'cart',
    
    loadChildren: () => import('./cart/cart.module')
    .then(m => m.CartModule),
    canActivate: [AuthGaurd]
  },
  {
    path : "home" , 
    component:HomeComponent,
    canActivate: [AuthGaurd]
  },
  {
    path : "restaurants" , 
    component:RestaurantsComponent,
    canActivate: [AuthGaurd]
  },
  {
    path : "restaurants/create" , 
    component:CreateComponent,
    canActivate: [AuthGaurd]
  },
  {
    path : "restaurant/edit/:id" , 
    component:EditComponent,
    canActivate: [AuthGaurd]
  },
  {
    path : "login" , 
    component:LoginComponent
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGaurd]
  },
  { path: '**', component: PagenotfoundComponent }
  
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
