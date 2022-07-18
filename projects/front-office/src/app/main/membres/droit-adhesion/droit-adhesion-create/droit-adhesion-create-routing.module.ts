import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroitAdhesionCreateComponent } from './droit-adhesion-create.component';


const routes: Routes = [
  {
    path: '',
    component: DroitAdhesionCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroitAdhesionCreateRoutingModule { }
