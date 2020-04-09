import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from './categories/categories.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:Category[];

  constructor(
    categoryService: CategoriesService){
    this.categories=categoryService.getCategory();

  }

  ngOnInit() {

  }

}
