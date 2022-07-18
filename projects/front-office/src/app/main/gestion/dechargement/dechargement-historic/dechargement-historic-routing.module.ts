import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DechargementHistoricComponent } from './dechargement-historic.component';


const routes: Routes = [
  {
    path: '',
    component: DechargementHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DechargementHistoricRoutingModule { }
