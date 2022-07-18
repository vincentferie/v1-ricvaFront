import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenteCreateComponent } from './vente-create.component';


const routes: Routes = [
  {
    path: '',
    component: VenteCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteCreateRoutingModule { }
