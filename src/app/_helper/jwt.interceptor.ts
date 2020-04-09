import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';


@Injectable()

export class JwtIInterceptor implements HttpInterceptor { 

    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let currenUser = this.authenticationService.currentUserValue;

        if( currenUser && currenUser.token){
            request = request.clone({
                setHeaders: {
                    Authorization : `Bearer ${currenUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}