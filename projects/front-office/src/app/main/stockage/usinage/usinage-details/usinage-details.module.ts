import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsinageDetailsComponent } from './usinage-details.component';


@NgModule({
  declarations: [UsinageDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [UsinageDetailsComponent]
})
export class UsinageDetailsModule { }
