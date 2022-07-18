import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FournisseurCreateComponent } from './fournisseur-create.component';


const routes: Routes = [
  {
    path: '',
    component: FournisseurCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurCreateRoutingModule { }
