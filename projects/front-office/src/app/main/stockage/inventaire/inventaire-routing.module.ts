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
        loadChildren: () => import('./inventaire-create/inventaire-create.module').then(module => module.InventaireCreateModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('./inventaire-historic/inventaire-historic.module').then(module => module.InventaireHistoricModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventaireRoutingModule { }
