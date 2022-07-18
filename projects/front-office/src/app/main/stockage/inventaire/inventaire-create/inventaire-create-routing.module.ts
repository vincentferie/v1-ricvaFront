import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventaireCreateComponent } from './inventaire-create.component';


const routes: Routes = [
  {
    path: '',
    component: InventaireCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventaireCreateRoutingModule { }
