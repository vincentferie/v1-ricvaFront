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
        loadChildren: () => import('./membre-create/membre-create.module').then(module => module.MembreCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./membre-historic/membre-historic.module').then(module => module.MembreHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreRoutingModule { }
