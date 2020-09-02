import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-trajet',
    loadChildren: () => import('./Trajet/new-trajet/new-trajet.module').then( m => m.NewTrajetPageModule)
  },
  {
    path: 'edit-trajet',
    loadChildren: () => import('./Trajet/edit-trajet/edit-trajet.module').then( m => m.EditTrajetPageModule)
  },
  {
    path: 'edit-frais',
    loadChildren: () => import('./Frais/edit-frais/edit-frais.module').then( m => m.EditFraisPageModule)
  },
  {
    path: 'new-frais',
    loadChildren: () => import('./Frais/new-frais/new-frais.module').then( m => m.NewFraisPageModule)
  },
  {
    path: 'liste-frais',
    loadChildren: () => import('./Frais/liste-frais/liste-frais.module').then( m => m.ListeFraisPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
