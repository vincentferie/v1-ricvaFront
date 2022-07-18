import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembreHistoricComponent } from './membre-historic.component';


const routes: Routes = [
  {
    path: '',
    component: MembreHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreHistoricRoutingModule { }
