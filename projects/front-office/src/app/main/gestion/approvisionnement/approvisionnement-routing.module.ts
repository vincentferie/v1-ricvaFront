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
        loadChildren: () => import('./approvisionnement-create/approvisionnement-create.module').then(module => module.ApprovisionnementCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./approvisionnement-historic/approvisionnement-historic.module').then(module => module.ApprovisionnementHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovisionnementRoutingModule { }
