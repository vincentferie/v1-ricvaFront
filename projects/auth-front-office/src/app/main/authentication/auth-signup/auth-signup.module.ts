import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupRoutingModule } from './auth-signup-routing.module';
import { AuthSignupComponent } from './auth-signup.component';

@NgModule({
  declarations: [AuthSignupComponent],
  imports: [
    CommonModule,
    AuthSignupRoutingModule
  ]
})
export class AuthSignupModule { }
