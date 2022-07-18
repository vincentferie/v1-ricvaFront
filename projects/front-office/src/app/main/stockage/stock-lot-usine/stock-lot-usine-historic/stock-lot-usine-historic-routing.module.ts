import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockLotUsineHistoricComponent } from './stock-lot-usine-historic.component';


const routes: Routes = [
  {
    path: '',
    component: StockLotUsineHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockLotUsineHistoricRoutingModule { }
