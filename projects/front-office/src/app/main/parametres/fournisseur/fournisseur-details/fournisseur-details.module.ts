import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurDetailsComponent } from './fournisseur-details.component';


@NgModule({
  declarations: [FournisseurDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [FournisseurDetailsComponent]
})
export class FournisseurDetailsModule { }
