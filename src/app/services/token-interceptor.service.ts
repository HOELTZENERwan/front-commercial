import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  token: Object;

  constructor(public authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    
    //----------- On clone la requete pour travailler dessus -----------
    if(localStorage.getItem('currentUser')){
      this.token = this.authService.getToken();

      const clone = request.clone({
        setHeaders: { 
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json',
          'Content-Type':  'application/json'
         }
      });

      return next.handle(clone);
      
    }else{

      return next.handle(request.clone())
    }
  }
}


export const ApiSymfonyInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptorService,
  multi: true
};
