import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TransportFormComponent } from './transport-form.component';


@NgModule({
  declarations: [TransportFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TransportFormComponent
  ]
})
export class TransportFormModule { }
