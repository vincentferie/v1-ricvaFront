import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VenteFormComponent } from './vente-form.component';


@NgModule({
  declarations: [VenteFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    VenteFormComponent
  ]
})
export class VenteFormModule { }
