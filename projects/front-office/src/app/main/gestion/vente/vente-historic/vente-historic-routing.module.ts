import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenteHistoricComponent } from './vente-historic.component';


const routes: Routes = [
  {
    path: '',
    component: VenteHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteHistoricRoutingModule { }
