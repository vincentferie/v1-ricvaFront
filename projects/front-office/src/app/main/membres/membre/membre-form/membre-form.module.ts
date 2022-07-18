import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MembreFormComponent } from './membre-form.component';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [MembreFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToolsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToolsModule,
    MembreFormComponent
  ]
})
export class MembreFormModule { }
