import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
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

export class CreateComponent implements OnInit {

  theForm : FormGroup;
  selectedPreference: string = '';

  

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
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    private router:Router,
    private _restaurantService: RestaurantService,
    private fb: FormBuilder,
  ) { 
    this.theForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      contactPreference: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      restaurantType: new FormControl(),
      checkArray: new FormArray([]),

  }); 
}

  ngOnInit() {

    this.theForm = this.fb.group({
      id: [''],
      name: ['',{ validators: [ Validators.required , Validators.minLength(4) ]}],
      email:['',{ validators: [ Validators.required , Validators.minLength(15) ,Validators.pattern(this.emailPattern) ]}],
      contactPreference: ['',[ Validators.required ]],
      phone:['', { validators:[ Validators.required ]}],
      address:['',{ validators:[ Validators.required , Validators.minLength(10) ]}],
      specification:['',{ validators:[ Validators.required ]}],
      checkArray: this.fb.array([], [Validators.required]),
      restaurantType:['', { validators:[ Validators.required ]}],
    });

  }
  
  addNewRestaurant(){
    console.log(this.theForm.value)
    this._restaurantService.addedRestaurant(this.theForm.value);

    this.router.navigate(['/restaurants'])
  }

// CHECKBOX changing value
  onCheckboxChange(e){
    const checkArray: FormArray = this.theForm.get('checkArray') as FormArray;

    if(e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if( item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
// CHECKBOX changing value END

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

  get checkArray(){
    return this.theForm.get('checkArray');
  }

  
} 
