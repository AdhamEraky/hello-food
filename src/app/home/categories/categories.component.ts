import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger('fade', [ 

      transition('void => *', [
        style({opacity: 0}),
        animate(2000)
      ]),

      transition('* => void', [
      animate(2000, style({opacity: 0 }))
      ]),
    ]),
  ],
})
export class CategoriesComponent implements OnInit {
  @Input() id;
  @Input() title;
  @Input() description;
  @Input() img;


  constructor( ) { } 
  ngOnInit() {
  }



}
