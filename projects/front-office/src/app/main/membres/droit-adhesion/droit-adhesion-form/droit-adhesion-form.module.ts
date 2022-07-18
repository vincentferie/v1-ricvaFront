import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DroitAdhesionFormComponent } from './droit-adhesion-form.component';


@NgModule({
  declarations: [DroitAdhesionFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DroitAdhesionFormComponent
  ]
})
export class DroitAdhesionFormModule { }
