import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementTypeDetailsComponent } from './movement-type-details.component';


@NgModule({
  declarations: [MovementTypeDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [MovementTypeDetailsComponent]
})
export class MovementTypeDetailsModule { }
