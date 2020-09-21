import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { allFrais } from '../../models/fake-liste';
import { Router } from '@angular/router';
import { TransfertServiceService } from '../../services/transfert-service.service';


@Component({
  selector: 'app-liste-frais',
  templateUrl: './liste-frais.page.html',
  styleUrls: ['./liste-frais.page.scss'],
})
export class ListeFraisPage implements OnInit {

  fraisData = [];
  idFrais;

  constructor(
    private api: ApiRequestService,
    private route:Router,
    private transfertService: TransfertServiceService,
  ) { }

  back(){
    this.transfertService.goBack();
  }

  frais(data){
    console.log(data)
    this.transfertService.setData(data);
    this.route.navigateByUrl('/frais');
  }

  selectId(path){
    let routeId = path;
    let routeIdTab = routeId.split('/');
    return routeIdTab[3];
  }

  ngOnInit() {

    let idTrajet = this.transfertService.getData();

    allFrais.forEach( data => {
      var trajet = {
        'id': data.id,
        'montant': data.montant,
        'date': data.date,
        'scan': 'https://e3manager.com/uploads/images/scans/'+data.scan,
        'commentaire': data.commentaire,
        'idStatutFrais': this.selectId(data.idStatutFrais),
        'idTypeFrais': this.selectId(data.idTypeFrais),
        'idTrajet': this.selectId(data.idTrajet),
        'idCommercial': this.selectId(data.idCommercial),
        'visible': false
      };

      this.fraisData.push(trajet);
    })
 
    this.api.allFrais()
      .subscribe((responseData) => {

        console.log(responseData);
      }, (error) => { 

        console.log(error);
      });
      
      console.log(this.fraisData);
  }
}
