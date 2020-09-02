import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFraisPageRoutingModule } from './edit-frais-routing.module';

import { EditFraisPage } from './edit-frais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFraisPageRoutingModule
  ],
  declarations: [EditFraisPage]
})
export class EditFraisPageModule {}
