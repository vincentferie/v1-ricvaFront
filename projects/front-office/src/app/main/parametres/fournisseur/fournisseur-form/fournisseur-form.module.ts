import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FournisseurFormComponent } from './fournisseur-form.component';


@NgModule({
  declarations: [FournisseurFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FournisseurFormComponent
  ]
})
export class FournisseurFormModule { }
