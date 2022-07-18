import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreDetailsComponent } from './membre-details.component';


@NgModule({
  declarations: [MembreDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [MembreDetailsComponent]
})
export class MembreDetailsModule { }
