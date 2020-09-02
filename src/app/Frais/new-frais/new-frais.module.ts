import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewFraisPageRoutingModule } from './new-frais-routing.module';

import { NewFraisPage } from './new-frais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewFraisPageRoutingModule
  ],
  declarations: [NewFraisPage]
})
export class NewFraisPageModule {}
