import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturationCreateComponent } from './facturation-create.component';


const routes: Routes = [
  {
    path: '',
    component: FacturationCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturationCreateRoutingModule { }
