import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportCreateComponent } from './transport-create.component';


const routes: Routes = [
  {
    path: '',
    component: TransportCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportCreateRoutingModule { }
