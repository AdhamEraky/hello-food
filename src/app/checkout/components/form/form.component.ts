import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { FormService } from './form.service';
import { Form } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // mobileNumberKey="+20";
  form: Form;
  registrationForm :  FormGroup;
  userDetails:Array<object>;
  genderType :any = [
    'Male',
    'Female'
  ];
  countries :any = [
    'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan',
    'The Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana',
    'Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Côte d\'Ivoire','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad',
    'Chile','China','Colombia','Comoros','Congo','Costa Rica','Croatia','Cuba','Cyprus','Czechia','Democratic Republic of the Congo','Denmark','Djibouti','Dominica',
    'Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Egypt','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia',
    'Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Holy See','Honduras','Hungary','Iceland','India','Indonesia','Iran',
    'Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya',
    'Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia',
    'Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria',
    'North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine State','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland',
    'Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino',
    'Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands',
    'Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Tajikistan',
    'Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda',
    'Ukraine','United Arab Emirates','United Kingdom','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela',
    'Vietnam','Yemen','Zambia','Zimbabwe',
  ];

  constructor(
    private formService: FormService,
    private fb : FormBuilder){ }

  
  
  ngOnInit(){
    this.userDetails = [];
    this.registrationForm = this.fb.group({
      fullName: ['',{ validators: [Validators.required , Validators.minLength(4) ]}],
      email:['',{ validators:[Validators.required , Validators.minLength(15) ,Validators.pattern("[^ @]*@[^ @]*") ]}],
      gender:['', { validators:[Validators.required]}],
      birthdate:['', { validators:[Validators.required]}],
      country:['', { validators:[Validators.required]}],
      phone:['', { validators:[Validators.required]}],
      address: ['' , { validators:[Validators.required , Validators.minLength(10) ]}],
    });
  }

  onRegisterSubmit(e){
    let user = {
      fullName: this.fullName,
      email: this.email,
      gender: this.gender,
      birthdate:this.birthdate,
      country: this.country,
      phone: this.phone,
      address: this.address,

    }
      console.log(this.registrationForm.value);
      this.userDetails.push(user);
      this.registrationForm.reset(e);
    }


  get fullName() {
    return this.registrationForm.get('fullName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get address() {
    return this.registrationForm.get('address');
  }

  get country(){
    return this.registrationForm.get('country');
  }
  get gender() {
    return this.registrationForm.get('gender');
  }

  get birthdate() {
    return this.registrationForm.get('birthdate');
  }
}
