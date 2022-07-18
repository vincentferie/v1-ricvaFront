import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsinageHistoricComponent } from './usinage-historic.component';


const routes: Routes = [
  {
    path: '',
    component: UsinageHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsinageHistoricRoutingModule { }
