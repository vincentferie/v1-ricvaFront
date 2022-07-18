import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventaireHistoricComponent } from './inventaire-historic.component';


const routes: Routes = [
  {
    path: '',
    component: InventaireHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventaireHistoricRoutingModule { }
