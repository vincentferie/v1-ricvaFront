import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientHistoricComponent } from './client-historic.component';


const routes: Routes = [
  {
    path: '',
    component: ClientHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientHistoricRoutingModule { }
