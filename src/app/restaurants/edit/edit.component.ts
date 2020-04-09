import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestaurantService, Restaurant } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  animations: [
    trigger('fade', [ 

      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ]),

      transition('* => void', [
      animate(1000, style({opacity: 0 }))
      ]),
    ]),
  ],
})
export class EditComponent implements OnInit {
  theForm : FormGroup;
  restaurantInfo: Restaurant;
  selectedId:number;



    preference :any = [
      'Mail',
      'Mobile'
    ];  

    specifications :Array<string> = [
      'Meat',
      'Dairy',
      'Drinks',
      'Bakery',
      'Sea food',
      'Cocktails',
      'Takeaway',
      'Cocktails',
      'Breakfasts',
      'Hot Drinks',
      'Fruit & Veg',
      'Fresh Drinks',
    ];

    restaurantTypes :Array<string> = [
      'Cafe',
      'Buffet',
      'Fast food',
      'Fine dining',
      'Fast casual',
      'Family style',
      'Casual dining',
      'Premium casual',
      'Ghost Restaurant',
      'Pop-Up Restaurant',
      'Brasserie and bistro',
      'Contemporary Casual',
    ];
 
  constructor(
    private router:Router,
    private readonly activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService, 
    private fb: FormBuilder) {
      
      

      this.activatedRoute.params.subscribe(param => {
        this.selectedId = param.id;
      });
    }

  ngOnInit() {
    this.restaurantInfo = this.restaurantService.getRestaurantById(this.selectedId);

    this.theForm = this.fb.group({
      id: [this.restaurantInfo.id],
      name: [this.restaurantInfo.name, { validators: [ Validators.required , Validators.minLength(4) ]}],
      email: [this.restaurantInfo.email, { validators: [ Validators.required , Validators.minLength(15) ,Validators.pattern("[^ @]*@[^ @]*") ]}],
      contactPreference: [this.restaurantInfo.contactPreference,[ Validators.required ]],
      phone: [this.restaurantInfo.phone, { validators:[ Validators.required ]}],
      address: [this.restaurantInfo.address, { validators:[ Validators.required , Validators.minLength(10) ]}],
      specification: [this.restaurantInfo.specification, { validators:[ Validators.required ]}],
      restaurantType: [this.restaurantInfo.restaurantType, { validators:[ Validators.required ]}],

    });
  }

  save(){
    this.router.navigate(['/restaurants'])
    this.restaurantService.editedRestaurant(this.theForm.value);
  }

  get name(){
    return this.theForm.get('name');
  }

  get contactPreference(){
    return this.theForm.get('contactPreference');
  }

  get email(){
    return this.theForm.get('email');
  }

  get phone(){
    return this.theForm.get('phone');
  }

  get address(){
    return this.theForm.get('address');
  }

  get specification(){
    return this.theForm.get('specification');
  }

  get restaurantType(){
    return this.theForm.get('restaurantType');
  }
}
