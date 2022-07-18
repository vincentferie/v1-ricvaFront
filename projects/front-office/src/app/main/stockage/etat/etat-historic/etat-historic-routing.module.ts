import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtatHistoricComponent } from './etat-historic.component';


const routes: Routes = [
  {
    path: '',
    component: EtatHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatHistoricRoutingModule { }
