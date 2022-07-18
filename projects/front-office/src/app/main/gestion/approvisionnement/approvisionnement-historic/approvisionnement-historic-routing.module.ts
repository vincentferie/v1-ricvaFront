import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovisionnementHistoricComponent } from './approvisionnement-historic.component';


const routes: Routes = [
  {
    path: '',
    component: ApprovisionnementHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovisionnementHistoricRoutingModule { }
