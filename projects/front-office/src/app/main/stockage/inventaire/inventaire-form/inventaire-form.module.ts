import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InventaireFormComponent } from './inventaire-form.component';


@NgModule({
  declarations: [InventaireFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    InventaireFormComponent
  ]
})
export class InventaireFormModule { }
