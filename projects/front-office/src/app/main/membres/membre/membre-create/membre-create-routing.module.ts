import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembreCreateComponent } from './membre-create.component';


const routes: Routes = [
  {
    path: '',
    component: MembreCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreCreateRoutingModule { }
