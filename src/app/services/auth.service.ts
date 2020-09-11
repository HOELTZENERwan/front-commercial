import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { User } from '../models/user';
import { ApiRoute } from '../models/apiRoute';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { promise } from 'protractor';
import { rejects } from 'assert';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public api = ApiRoute; // objet qui contiens toutes mes url d'api



  constructor(
    private http: HttpClient,
    private route: Router,
    ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): User{
    return this.currentUserSubject.value
  }

   connexion(identifiants){
    return new Promise((resolve, reject) => {

      this.http.post(this.api.login, identifiants)
        .subscribe((data) => {
          console.log(data);
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.route.navigateByUrl('/home');
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        })
    });

  }


  // public connexion(identifiants) {
  //   console.log(identifiants)
  //   this.http.post(this.api.login, identifiants)
  //     .pipe(
  //       map((token) => {
          
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(token));
  //         return token;
  //     }));
  // }

  getToken(){
    
    var token = JSON.parse(localStorage.getItem('currentUser'));
    return token.token;
  }

  deconnexion() {
    console.log('deconnexion');
    localStorage.removeItem('currentUser');
    this.route.navigateByUrl('login');
    this.currentUserSubject.next(null);
  }
}