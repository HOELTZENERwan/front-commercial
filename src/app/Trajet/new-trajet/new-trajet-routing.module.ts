import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTrajetPage } from './new-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: NewTrajetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTrajetPageRoutingModule {}
