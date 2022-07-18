import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartSocialeCreateComponent } from './part-sociale-create.component';


const routes: Routes = [
  {
    path: '',
    component: PartSocialeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartSocialeCreateRoutingModule { }
