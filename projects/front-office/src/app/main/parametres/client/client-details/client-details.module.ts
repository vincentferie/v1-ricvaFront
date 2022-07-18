import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailsComponent } from './client-details.component';


@NgModule({
  declarations: [ClientDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [ClientDetailsComponent]
})
export class ClientDetailsModule { }
