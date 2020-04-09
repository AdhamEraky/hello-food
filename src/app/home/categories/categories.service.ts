import { Injectable } from '@angular/core';

export interface Category{
                id: number;
                title: string;
                description: string;
                img:string;
}

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  
  getCategory():Category[]{
    return[
      { id : 1 , 
        title: 'Bakery',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/bakery.jpg"
      },
      { id : 2 , 
        title: 'Takeaway',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/takeaway.jpg"
      },
      { id : 3 , 
        title: 'Dairy',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/dairy.jpg"
      },
      { id : 4 , 
        title: 'Meat',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/meat.jpeg"
      },
      { id : 5 , 
        title: 'Seafood',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/seafood.jpg"
      },
      { id : 6 , 
        title: 'Fruit & Veg',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/fruit-veg.jpg"
      },
      { id : 7 , 
        title: 'Hot Drinks',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/hotdrinks.jpg"
      },
      { id : 8 , 
        title: 'Fresh Drinks',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/freshdrinks.jpg"
      },
      { id : 9 , 
        title: 'Cocktails',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
        img: "/assets/home/cocktails.jpg"
      },


    ]
  }


  constructor() { }
}
