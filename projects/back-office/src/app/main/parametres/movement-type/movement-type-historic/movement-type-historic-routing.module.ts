import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementTypeHistoricComponent } from './movement-type-historic.component';


const routes: Routes = [
  {
    path: '',
    component: MovementTypeHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementTypeHistoricRoutingModule { }
