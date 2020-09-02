import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewFraisPage } from './new-frais.page';

const routes: Routes = [
  {
    path: '',
    component: NewFraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewFraisPageRoutingModule {}
