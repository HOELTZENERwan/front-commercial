import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  identifiants = {};

  constructor(
    private log: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
  ) {
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['']);
      }
    }

  ngOnInit() {
  }
  
  login(){
    this.log.connexion(this.identifiants)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['']);
        },
        error => {
            console.log(error.message);
        });
  }
}
