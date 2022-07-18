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
        loadChildren: () => import('./droit-adhesion-create/droit-adhesion-create.module').then(module => module.DroitAdhesionCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./droit-adhesion-historic/droit-adhesion-historic.module').then(module => module.DroitAdhesionHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroitAdhesionRoutingModule { }
