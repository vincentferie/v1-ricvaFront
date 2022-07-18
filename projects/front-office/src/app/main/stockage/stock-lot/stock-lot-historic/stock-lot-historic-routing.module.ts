import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockLotHistoricComponent } from './stock-lot-historic.component';


const routes: Routes = [
  {
    path: '',
    component: StockLotHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockLotHistoricRoutingModule { }
