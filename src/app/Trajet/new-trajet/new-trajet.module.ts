import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTrajetPageRoutingModule } from './new-trajet-routing.module';

import { NewTrajetPage } from './new-trajet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTrajetPageRoutingModule
  ],
  declarations: [NewTrajetPage]
})
export class NewTrajetPageModule {}
