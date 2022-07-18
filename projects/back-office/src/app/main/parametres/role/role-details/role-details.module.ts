import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleDetailsComponent } from './role-details.component';


@NgModule({
  declarations: [RoleDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [RoleDetailsComponent]
})
export class RoleDetailsModule { }
