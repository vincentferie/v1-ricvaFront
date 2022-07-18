import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      },
      {
        path: 'create',
        loadChildren: () => import('./utilisateur-create/utilisateur-create.module').then(module => module.UtilisateurCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./utilisateur-historic/utilisateur-historic.module').then(module => module.UtilisateurHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
