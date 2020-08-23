import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router  } from '@angular/router';
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
    private router: Router
  ) {
      if (this.log.currentUserValue) { 
        this.router.navigateByUrl('home');
      }
    }

  ngOnInit() {
  }
  
  login(){

    this.log.connexion(this.identifiants)
          .pipe(first())
          .subscribe(
              (data) => {
                console.log(data);
                const redirectUrl = this.route.snapshot.queryParams['../layout/home/home.component.ts'] || '/home';
                this.router.navigateByUrl(redirectUrl);
              },
              (error) => {
                  console.log(error.message);
              });
  }
}
