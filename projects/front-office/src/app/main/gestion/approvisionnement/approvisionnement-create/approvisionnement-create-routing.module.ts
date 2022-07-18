import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovisionnementCreateComponent } from './approvisionnement-create.component';


const routes: Routes = [
  {
    path: '',
    component: ApprovisionnementCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovisionnementCreateRoutingModule { }
