import { Injectable, Injector } from "@angular/core";
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from './auth.service';

import { ApiRoute } from '../models/apiRoute';


@Injectable({
    providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
    public api = ApiRoute;

    constructor() {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler){ 

            const patate = this.api.login;
            //tokenReq est = à un clone de la requête http
            const tokenReq = req.clone({
                //mis en place du token
                headers: req.headers.set("currentUser", patate)
            });
            return next.handle(tokenReq)

        }

    }