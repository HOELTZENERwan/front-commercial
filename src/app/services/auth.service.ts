import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { ApiRoute } from '../models/apiRoute';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public api = ApiRoute; // objet qui contiens toutes mes url d'api

  constructor(
    private http: HttpClient,
    
    ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): User{
    return this.currentUserSubject.value
  }

  connexion(identifiants) {
    console.log('connexion');
    return this.http.post(this.api.login, identifiants)
      .pipe(
        map((token) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(token));
          return token;
      }));
  }

  deconnexion() {
    console.log('deconnexion');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
