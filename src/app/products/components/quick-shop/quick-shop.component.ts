import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quick-shop',
  templateUrl: './quick-shop.component.html',
  styleUrls: ['./quick-shop.component.css']
})
export class QuickShopComponent implements OnInit {
  @Output() searchToParent : EventEmitter<string>;
  constructor() { 
    this.searchToParent = new EventEmitter();
  }

  ngOnInit() {
  }

  onSelect(productTitle: string){
    this.searchToParent.emit(productTitle);
  }
}
