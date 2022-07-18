import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartSocialeHistoricComponent } from './part-sociale-historic.component';


const routes: Routes = [
  {
    path: '',
    component: PartSocialeHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartSocialeHistoricRoutingModule { }
