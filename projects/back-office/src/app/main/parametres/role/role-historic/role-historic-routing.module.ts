import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleHistoricComponent } from './role-historic.component';


const routes: Routes = [
  {
    path: '',
    component: RoleHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleHistoricRoutingModule { }
