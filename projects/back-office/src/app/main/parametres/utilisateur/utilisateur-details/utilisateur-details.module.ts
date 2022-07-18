import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurDetailsComponent } from './utilisateur-details.component';


@NgModule({
  declarations: [UtilisateurDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [UtilisateurDetailsComponent]
})
export class UtilisateurDetailsModule { }
