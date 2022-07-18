import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApprovisionnementFormComponent } from './approvisionnement-form.component';


@NgModule({
  declarations: [ApprovisionnementFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ApprovisionnementFormComponent
  ]
})
export class ApprovisionnementFormModule { }
