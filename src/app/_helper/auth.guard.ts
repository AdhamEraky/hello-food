import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';


@Injectable({ providedIn: 'root' })

export class AuthGaurd implements CanActivate { 

    constructor (
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
// dasdfasfhasklfasfas
        const currentUser = this.authenticationService.isAuthenticated(); 

        if(currentUser){
            return true;
        }

        this.router.navigate(['/login']);
        return false;   
        
    }
}