import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { dataClient } from '../../models/fake-liste';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss']
})
export class ClientsPage {

clientData = [];

  constructor(
    private api: ApiRequestService,
  ) {}

  affiche(id){

    this.clientData.forEach( data => {
      if(data.id == id){
        data.visible = !data.visible;
      }else{
        data.visible = false;
      }
    });

  }

  ngOnInit() {

    dataClient.forEach( data => {
      var client = {
        'id': data.id,
        'AllTrajets': data.AllTrajets,
        'adresse': data.adresse,
        'email': data.email,
        'nom': data.nom,
        'prenom': data.prenom,
        'tel': data.tel,
        'visible': false
      };
      this.clientData.push(client);
    })

    this.api.allClient()
      .subscribe((responseData) => {

        console.log(responseData);
      }, (error) => { 
        console.log(error);
      });
  }
}
