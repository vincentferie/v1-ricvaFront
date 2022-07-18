import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventaireDetailsComponent } from './inventaire-details.component';


@NgModule({
  declarations: [InventaireDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [InventaireDetailsComponent]
})
export class InventaireDetailsModule { }
