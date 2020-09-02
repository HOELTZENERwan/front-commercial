import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientsPage } from './clients.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ClientsPageRoutingModule } from './clients-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ClientsPageRoutingModule
  ],
  declarations: [ClientsPage]
})
export class ClientsPageModule {}
