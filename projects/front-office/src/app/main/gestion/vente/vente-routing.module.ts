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
        loadChildren: () => import('./vente-create/vente-create.module').then(module => module.VenteCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./vente-historic/vente-historic.module').then(module => module.VenteHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteRoutingModule { }
