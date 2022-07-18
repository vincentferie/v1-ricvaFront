import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DechargementFormComponent } from './dechargement-form.component';


@NgModule({
  declarations: [DechargementFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DechargementFormComponent
  ]
})
export class DechargementFormModule { }
