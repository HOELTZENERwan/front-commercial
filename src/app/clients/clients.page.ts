import { Component } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss']
})
export class ClientsPage {

  constructor(
    private api: ApiRequestService,
  ) {}

  ngOnInit() {
    console.log(this.api.allClient())
  }
}
