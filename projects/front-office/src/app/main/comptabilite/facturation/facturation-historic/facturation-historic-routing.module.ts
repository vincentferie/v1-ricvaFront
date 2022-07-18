import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturationHistoricComponent } from './facturation-historic.component';


const routes: Routes = [
  {
    path: '',
    component: FacturationHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturationHistoricRoutingModule { }
