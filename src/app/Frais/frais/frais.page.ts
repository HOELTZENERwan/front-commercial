import { Component, OnInit } from '@angular/core';
import { TransfertServiceService } from '../../services/transfert-service.service';

@Component({
  selector: 'app-frais',
  templateUrl: './frais.page.html',
  styleUrls: ['./frais.page.scss'],
})
export class FraisPage implements OnInit {

  frais = { }

  constructor(
    private transfertService: TransfertServiceService,
  ) { }

  back(){
    this.transfertService.goBack(); 
  }

  ngOnInit() {
    this.frais = this.transfertService.getData();

    if(this.frais){
      console.log(this.frais)
    }else{
      this.back()
    }
  }

}
