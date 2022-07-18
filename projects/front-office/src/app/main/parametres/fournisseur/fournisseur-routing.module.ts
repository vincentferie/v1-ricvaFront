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
        loadChildren: () => import('./fournisseur-create/fournisseur-create.module').then(module => module.FournisseurCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./fournisseur-historic/fournisseur-historic.module').then(module => module.FournisseurHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
