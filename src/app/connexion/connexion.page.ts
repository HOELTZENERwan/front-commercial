import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiRequestService } from '../services/api-request.service';



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
    private api: ApiRequestService,
  ) {
      if (this.log.currentUserValue) { 
        this.router.navigateByUrl('home');
      }
    }

  ngOnInit() {
  }
  
  login(){
    this.log.connexion(this.identifiants)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigateByUrl('/',{skipLocationChange: false}).then(() => this.router.navigate([this.route.snapshot.url.join('/home')]))
        },
        (error) => {
            console.log(error.message);
        }
      );
  }
}
