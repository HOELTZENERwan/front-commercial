import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeFraisPage } from './liste-frais.page';

const routes: Routes = [
  {
    path: '',
    component: ListeFraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeFraisPageRoutingModule {}
