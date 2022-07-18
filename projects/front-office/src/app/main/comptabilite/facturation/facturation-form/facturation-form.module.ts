import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FacturationFormComponent } from './facturation-form.component';


@NgModule({
  declarations: [FacturationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FacturationFormComponent
  ]
})
export class FacturationFormModule { }
