import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DechargementCreateComponent } from './dechargement-create.component';


const routes: Routes = [
  {
    path: '',
    component: DechargementCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DechargementCreateRoutingModule { }
