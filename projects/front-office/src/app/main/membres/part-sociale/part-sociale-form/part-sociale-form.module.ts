import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PartSocialeFormComponent } from './part-sociale-form.component';


@NgModule({
  declarations: [PartSocialeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PartSocialeFormComponent
  ]
})
export class PartSocialeFormModule { }
