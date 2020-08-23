import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrajetsPage } from './trajets.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrajetsPageRoutingModule {}
