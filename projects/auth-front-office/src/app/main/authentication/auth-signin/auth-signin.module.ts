import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolsModule } from 'projects/tools/src/public-api';

@NgModule({
  declarations: [
    AuthSigninComponent
  ],
  imports: [
    CommonModule,
    AuthSigninRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToolsModule
  ]
})
export class AuthSigninModule { }
