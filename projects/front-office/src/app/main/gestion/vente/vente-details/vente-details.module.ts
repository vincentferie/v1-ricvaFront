import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenteDetailsComponent } from './vente-details.component';


@NgModule({
  declarations: [VenteDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [VenteDetailsComponent]
})
export class VenteDetailsModule { }
