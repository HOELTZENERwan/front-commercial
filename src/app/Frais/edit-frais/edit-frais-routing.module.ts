import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFraisPage } from './edit-frais.page';

const routes: Routes = [
  {
    path: '',
    component: EditFraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFraisPageRoutingModule {}
