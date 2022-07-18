import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurCreateComponent } from './utilisateur-create.component';


const routes: Routes = [
  {
    path: '',
    component: UtilisateurCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurCreateRoutingModule { }
