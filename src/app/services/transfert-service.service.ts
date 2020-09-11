import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfertServiceService {

  constructor() { }
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
}
