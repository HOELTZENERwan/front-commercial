import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeFraisPageRoutingModule } from './liste-frais-routing.module';

import { ListeFraisPage } from './liste-frais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeFraisPageRoutingModule
  ],
  declarations: [ListeFraisPage]
})
export class ListeFraisPageModule {}
