import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfertServiceService {

  constructor(
    private _location: Location
  ) { 

  }
  private data;

  setData(data){
    this.data = data;
  }

  getData(){
    let res = this.data;
    this.clearData();
    return res;
  }

  clearData(){
    this.data = undefined;
  }

  goBack(){
    this._location.back();
  }
}
