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
    path: 'new-trajet',
    loadChildren: () => import('./Trajet/new-trajet/new-trajet.module').then( m => m.NewTrajetPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'liste-frais',
    loadChildren: () => import('./Frais/liste-frais/liste-frais.module').then( m => m.ListeFraisPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'frais',
    loadChildren: () => import('./Frais/frais/frais.module').then( m => m.FraisPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'new-frais',
    loadChildren: () => import('./Frais/new-frais/new-frais.module').then( m => m.NewFraisPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'new-client',
    loadChildren: () => import('./Client/new-client/new-client.module').then( m => m.NewClientPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
