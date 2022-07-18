import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockLotUsineDetailsComponent } from './stock-lot-usine-details.component';


@NgModule({
  declarations: [StockLotUsineDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [StockLotUsineDetailsComponent]
})
export class StockLotUsineDetailsModule { }
