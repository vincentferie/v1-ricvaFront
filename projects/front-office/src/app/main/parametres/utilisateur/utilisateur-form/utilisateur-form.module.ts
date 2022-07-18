import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilisateurFormComponent } from './utilisateur-form.component';


@NgModule({
  declarations: [UtilisateurFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    UtilisateurFormComponent
  ]
})
export class UtilisateurFormModule { }
