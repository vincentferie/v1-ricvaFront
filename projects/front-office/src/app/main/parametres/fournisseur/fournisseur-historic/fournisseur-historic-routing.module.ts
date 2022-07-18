import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FournisseurHistoricComponent } from './fournisseur-historic.component';


const routes: Routes = [
  {
    path: '',
    component: FournisseurHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurHistoricRoutingModule { }
