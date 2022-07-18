import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturationDetailsComponent } from './facturation-details.component';


@NgModule({
  declarations: [FacturationDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [FacturationDetailsComponent]
})
export class FacturationDetailsModule { }
