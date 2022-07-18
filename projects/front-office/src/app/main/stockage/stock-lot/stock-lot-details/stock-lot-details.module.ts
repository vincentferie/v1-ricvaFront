import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockLotDetailsComponent } from './stock-lot-details.component';


@NgModule({
  declarations: [StockLotDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [StockLotDetailsComponent]
})
export class StockLotDetailsModule { }
