import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent, AppsComponent } from 'projects/tools/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    children: [
      {
        path: '',
        redirectTo: 'applications',
        pathMatch: 'full'
      },
      {
        path: 'applications',
        loadChildren: () => import('./main/applications/applications.module').then(module => module.ApplicationsModule)
      },
    ],
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      /* App Cacao */
      {
        path: 'cacao',
        loadChildren: () => import('./main/apps/cacao/cacao.module').then(module => module.CacaoModule)
      },
      /* App Cajou */
      {
        path: 'cajou',
        loadChildren: () => import('./main/apps/cajou/cajou.module').then(module => module.CajouModule)
      },
      {
        path: 'anarcade',
        loadChildren: () => import('./main/apps/anarcade/anarcade.module').then(module => module.AnarcadeModule)
      },
      // canActivate: [AuthGuard]
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
