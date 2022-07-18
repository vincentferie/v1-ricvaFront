import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportDetailsComponent } from './transport-details.component';


@NgModule({
  declarations: [TransportDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [TransportDetailsComponent]
})
export class TransportDetailsModule { }
