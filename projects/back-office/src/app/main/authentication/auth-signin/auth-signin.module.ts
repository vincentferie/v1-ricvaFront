import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthSigninComponent
  ],
  imports: [
    CommonModule,
    AuthSigninRoutingModule,
    SharedModule
  ]
})
export class AuthSigninModule { }
