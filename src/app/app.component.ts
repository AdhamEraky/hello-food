import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Title } from '@angular/platform-browser';



@Component({ 
    selector: 'app-root', 
    templateUrl: 'app.component.html' ,  
    styleUrls: ['app.component.css'] ,  
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

export class AppComponent {
    currentUser: User;
    spinner = true;

    constructor(
        private titleService : Title,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}
