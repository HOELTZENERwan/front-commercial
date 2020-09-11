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
    private router:Router,
    private transfertService: TransfertServiceService,
  ) { }

  affiche(id){

    this.fraisData.forEach( data => {
      if(data.id == id){
        data.visible = !data.visible;
      }else{
        data.visible = false;
      }
    });

  }

  transfertIdTrajet(id){
    
    this.router.navigateByUrl('/home/frais');
  }

  selectId(path){
    let routeId = path;
    let routeIdTab = routeId.split('/');
    return routeIdTab[3];
  }

  ngOnInit() {

    let idTrajet = this.transfertService.getData();

    // let dataFrais;

    // allFrais.forEach(data => {
    //   let routeId = data.idTrajet;
    //   let routeIdTab = routeId.split('/');
    //   if(routeIdTab[2] == idTrajet){
    //     dataFrais.push(data);
    //   }
    // });

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
