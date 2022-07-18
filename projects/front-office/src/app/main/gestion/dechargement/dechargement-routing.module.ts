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
        loadChildren: () => import('./dechargement-create/dechargement-create.module').then(module => module.DechargementCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./dechargement-historic/dechargement-historic.module').then(module => module.DechargementHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DechargementRoutingModule { }
