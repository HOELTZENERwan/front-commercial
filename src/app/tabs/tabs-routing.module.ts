import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'clients',
        loadChildren: () => import('../Client/clients/clients.module').then(m => m.ClientsPageModule)
      },
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'trajets',
        loadChildren: () => import('../Trajet/trajets/trajets.module').then(m => m.TrajetsPageModule)
      },
      {
        path: 'frais',
        loadChildren: () => import('../Frais/liste-frais/liste-frais.module').then(m => m.ListeFraisPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
