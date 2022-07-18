import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Panneau d\'administration',
      status: true
    },
    children: [
      {
        path: '',
        redirectTo: 'administration',
        pathMatch: 'full'
      },
      {
        path: 'administration',
        component: AdministrationComponent
      },
      {
        path: 'utilisateur',
        loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
