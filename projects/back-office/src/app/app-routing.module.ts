import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent, AuthComponent } from 'projects/tools/src/lib/layout';
import { LoggedGuard } from 'projects/tools/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./main/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      /* Paramètres */
      {
        path: 'parametres',
        loadChildren: () => import('./main/parametres/administration.module').then(module => module.AdministrationModule)
      },
    ],
    // canActivate: [AuthGuard]
    // canActivate: [AuthGuard, LockGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./main/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ],
    //canActivate: [LoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
