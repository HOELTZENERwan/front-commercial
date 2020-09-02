import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrajetsPage } from './trajets.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TrajetsPageRoutingModule } from './trajets-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TrajetsPage }]),
    TrajetsPageRoutingModule,
  ],
  declarations: [TrajetsPage]
})
export class TrajetsPageModule {}
