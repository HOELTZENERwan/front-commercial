import { Component } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  
  trajetPath = '../assets/icon/list.png';

  homePath = '../assets/icon/home2.png';

  clientPath = '../assets/icon/customer.png';


  constructor(

  ) {}

  modif(id){

    switch(id){
      case 1:
          this.trajetPath ='../assets/icon/list.png'
          this.homePath = '../assets/icon/home.png';
          this.clientPath = '../assets/icon/customer2.png';
        
        break;
      case 2:
        
          this.trajetPath ='../assets/icon/list.png'
          this.homePath = '../assets/icon/home2.png';
          this.clientPath = '../assets/icon/customer.png';

        break;
      case 3:

          this.trajetPath ='../assets/icon/list2.png'
          this.homePath = '../assets/icon/home.png';
          this.clientPath = '../assets/icon/customer.png';

        break;
    }
  }

  
}
