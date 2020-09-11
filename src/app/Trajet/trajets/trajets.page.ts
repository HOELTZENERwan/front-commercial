import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { dataTrajets } from '../../models/fake-liste';
import { Router } from '@angular/router';
import { TransfertServiceService } from '../../services/transfert-service.service';

@Component({
  selector: 'app-trajets',
  templateUrl: 'trajets.page.html',
  styleUrls: ['trajets.page.scss']
})
export class TrajetsPage {
  trajetData = [];



  constructor(
    private api: ApiRequestService,
    private router:Router,
    private transfertService: TransfertServiceService,
  ) { }

  affiche(id){

    this.trajetData.forEach( data => {
      if(data.id == id){
        data.visible = !data.visible;
      }else{
        data.visible = false;
      }
    });

  }

  transfertIdTrajet(id){
    this.transfertService.setData(id);
    this.router.navigateByUrl('/frais');
  }

  ngOnInit() {
  
    dataTrajets.forEach( data => {
      var trajet = {
        'id': data.id,
        'label': data.label,
        'dateDebut': data.dateDebut,
        'dateFin': data.dateFin,
        'commentaire': data.commentaire,
        'fraisAll': data.fraisAll,
        'idClient': data.idClient,
        'visible': false
      };
      this.trajetData.push(trajet);
    })
 
    this.api.allTrajet()
      .subscribe((responseData) => {

        console.log(responseData);
      }, (error) => { 

        console.log(error);
      });
      console.log(this.trajetData);
  }
}