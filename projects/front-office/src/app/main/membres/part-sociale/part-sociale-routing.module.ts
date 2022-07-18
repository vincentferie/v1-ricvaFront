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
        loadChildren: () => import('./part-sociale-create/part-sociale-create.module').then(module => module.PartSocialeCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./part-sociale-historic/part-sociale-historic.module').then(module => module.PartSocialeHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartSocialeRoutingModule { }
