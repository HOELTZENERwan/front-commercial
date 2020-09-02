import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { dataClient } from '../../models/client-liste';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss']
})
export class ClientsPage {

clientData = [];
hidden: boolean;

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
    this.hidden = false;

    
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
    console.log(this.clientData)
    /*
    this.api.allClient()
      .subscribe((data) => {
        console.log(data)
      }, (error) => { 
        console.log(error);
      });
      */
  }
}
