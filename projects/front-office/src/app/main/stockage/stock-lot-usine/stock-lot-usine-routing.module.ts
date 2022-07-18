import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./stock-lot-usine-historic/stock-lot-usine-historic.module').then(module => module.StockLotUsineHistoricModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockLotUsineRoutingModule { }
