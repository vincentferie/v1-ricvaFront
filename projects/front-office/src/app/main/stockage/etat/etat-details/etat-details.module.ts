import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatDetailsComponent } from './etat-details.component';


@NgModule({
  declarations: [EtatDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [EtatDetailsComponent]
})
export class EtatDetailsModule { }
