import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroitAdhesionHistoricComponent } from './droit-adhesion-historic.component';


const routes: Routes = [
  {
    path: '',
    component: DroitAdhesionHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroitAdhesionHistoricRoutingModule { }
