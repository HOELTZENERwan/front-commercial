import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'client', loadChildren: () => import('./clients/clients.module').then( m => m.ClientsModule)
  },
  {
    path: 'frais', loadChildren: () => import('./frais/frais.module').then( m => m.FraisModule)
  },
  {
    path: 'trajet', loadChildren: () => import('./trajets/trajets.module').then( m => m.TrajetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule { }