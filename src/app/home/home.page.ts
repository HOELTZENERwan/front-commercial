import { Component, OnInit } from '@angular/core';
import { allFrais } from '../models/fake-liste';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  prixEnAttente = 0;
  totalAttente = 0;

  prixTraiter = 0;
  totalTraiter = 0;

  prixrefus = 0;
  totalrefus = 0;

  listeFrais = allFrais;

  constructor(
    private log: AuthService,

  ) {}

  selectId(path){
    let routeId = path;
    let routeIdTab = routeId.split('/');
    return routeIdTab[3];
  }

  ngOnInit() {
    this.listeFrais.forEach(frais => {

      if(this.selectId(frais.idStatutFrais) == 19){
        this.totalAttente++;
        this.prixEnAttente += frais.montant;
      }
      if(this.selectId(frais.idStatutFrais) == 20){
        this.totalrefus += frais.montant;
        this.totalrefus++;
      }
      if(this.selectId(frais.idStatutFrais) == 21){
        this.prixTraiter += frais.montant;
        this.totalTraiter++;
      }
    })
  }

  logOut(){
      this.log.deconnexion();
      
  }        
} 
