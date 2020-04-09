import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CategoriesService } from './home/categories/categories.service';
import { CartService } from './cart/cart.service';
import { ProductListService } from './products/components/product-list/product-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateCommentGQL, deleteComment, addPost } from './mutation.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JwtIInterceptor } from './_helper/jwt.interceptor';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { fakeBackendProvider } from './_helper/fake-backend';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreateComponent } from './restaurants/create/create.component';
import { EditComponent } from './restaurants/edit/edit.component';
import { RestaurantService } from './restaurants/restaurant.service';
import { LandingComponent } from './home/landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      CategoriesComponent,
      LoginComponent,
      RestaurantsComponent,
      CreateComponent,
      EditComponent,
      LandingComponent,
      PagenotfoundComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      GraphQLModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtIInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
       CartService,
       ProductListService,
       CategoriesService,
       CreateCommentGQL,
       deleteComment,
       addPost,
       RestaurantService,
       Title,
       
       fakeBackendProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
