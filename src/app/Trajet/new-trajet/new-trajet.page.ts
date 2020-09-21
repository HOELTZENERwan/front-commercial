import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataClient } from '../../models/fake-liste';
import { ApiRequestService } from '../../services/api-request.service';
import { TransfertServiceService } from '../../services/transfert-service.service';

@Component({
  selector: 'app-new-trajet',
  templateUrl: './new-trajet.page.html',
  styleUrls: ['./new-trajet.page.scss'],
})
export class NewTrajetPage implements OnInit {

  trajet = {}
  clientList = dataClient;

  constructor(
    private transfertService: TransfertServiceService,
    private route: Router,
    private api: ApiRequestService
  ) { }

  ngOnInit() {
  }

  back(){
    this.transfertService.goBack();
  }

  newTrajet(){
    console.log(this.trajet);
    this.api.newTrajet(this.trajet);
    this.route.navigateByUrl('trajet');
  }



}
