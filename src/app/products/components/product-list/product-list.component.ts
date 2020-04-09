import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() id;
  @Input() title;
  @Input() description;
  @Input() img;
  @Input() price;
  
constructor() { }

  ngOnInit() {
  }

}
