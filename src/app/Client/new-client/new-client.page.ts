import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';
import { TransfertServiceService } from '../../services/transfert-service.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {

  constructor(
      private transfertService: TransfertServiceService,
      private api: ApiRequestService,
      private route: Router
  ) { }

  client = {}


  ngOnInit() {
  }

  back(){
    this.transfertService.goBack();
  }

  addClient(){
    console.log(this.client)
    this.api.newClient(this.client)
    this.route.navigateByUrl('client')
  }
}
