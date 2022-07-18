import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovementTypeFormComponent } from './movement-type-form.component';


@NgModule({
  declarations: [MovementTypeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MovementTypeFormComponent
  ]
})
export class MovementTypeFormModule { }
