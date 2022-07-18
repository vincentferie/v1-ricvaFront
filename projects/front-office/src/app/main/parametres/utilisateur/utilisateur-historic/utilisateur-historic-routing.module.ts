import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurHistoricComponent } from './utilisateur-historic.component';


const routes: Routes = [
  {
    path: '',
    component: UtilisateurHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurHistoricRoutingModule { }
