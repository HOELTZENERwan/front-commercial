import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { ApiRoute } from '../models/apiRoute';

@Injectable({
  providedIn: 'root'
})



export class ApiRequestService {

  public api = ApiRoute; // objet qui contiens toutes mes url d'api
    
  constructor(
    private http: HttpClient,
  ) { }


  allClient(){
    return this.http.get(this.api.client.all);
  }

}
