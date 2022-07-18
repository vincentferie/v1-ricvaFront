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
        loadChildren: () => import('./facturation-create/facturation-create.module').then(module => module.FacturationCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./facturation-historic/facturation-historic.module').then(module => module.FacturationHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturationRoutingModule { }
