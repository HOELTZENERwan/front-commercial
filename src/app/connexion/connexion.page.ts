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
  data = {
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTk4MjAxNTAsImV4cCI6MTU5OTgyMzc1MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY29tbWVyY2lhbEBtYWlsLmNvbSIsInVzZXJJZCI6NDV9.HEs0kNqST82n6RP_o6cbnA4-XNqR0xWRJHgm7c7YZQEXivSmWMqWc-QSBaRnzGtdzFBVh0oD8YmWgGF0q6wgaNXX5xLKrZDyFmFEjnhgYQ0xi4qpyqiBA0qrHrJebdtz1E4vNUJ2OqqVH4kjNn4uUFL3Ehm2qaitDsACrNXBmN1-rXGJWWW5ngWquov-N8qu3ujc6VvthvjLPNFKuO4bhB3kAMdRkaV3nLKjMGaJhLdm4Es_Oco3N4nsTRS6BPdwLkML4C3NyKIbqsPzFj6Zh6f64eCB7F5asqp8eQUSDuCBjjJLouxoWeAXoR6HW1PCIQLvew1gfs3SR93Gby2XUt0_vdhCRRPt2m5is3PLhEVjEzg_KklGh_gHz9QaBztMVQSau0ZbZLDs8R9LPjBL8fOWBOW4NQNHs_cMDOFAJFPKhdso9oLby4997GwUvUrzLQYmoVwd-V7yK8f1XrsZxD-lG8fG_de-QIQJqyywH27XHnyYwsp99dNIV5DkCk-CSRRODvzDPLRJiAXk-PGk419b9Ckr7IJl6ee2cdjE3VDk1bFnZ0Nv5ieBfkHzloPdUeDLgH5J6leGuw-ROuk2nNxShpxAo0KJ_Q-a5542uxN17FEaayf21aVx5hAHSjsjSumkVP_DA296R6mRyCup2zpG4FQpq74wSH2Zb2GYJXg",
    refresh_token: "e565b18eb9cbb7af1ae41e54c46b0852814001cc27089dd36e7b607e0ee7c45b3236cc1d616f95446702b387bb824cd7be0110e60d3807ff3f58293e7b1fd551"
}
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
    
    console.log('coucou')
    localStorage.setItem('currentUser', JSON.stringify(this.data));
    location.reload()
  //   this.log.connexion(this.identifiants)
  //     .then(
  //       (data) => {
  //         // console.log(data);
          
  //       },
  //       (error) => {
  //           console.log(error.message);
  //       }
  //     );
  }
}
