import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockLotUsineHistoricRoutingModule } from './stock-lot-usine-historic-routing.module';
import { StockLotUsineHistoricComponent } from './stock-lot-usine-historic.component';
import { StockLotUsineDetailsModule } from '../stock-lot-usine-details/stock-lot-usine-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [StockLotUsineHistoricComponent],
  imports: [
    CommonModule,
    StockLotUsineHistoricRoutingModule,
    StockLotUsineDetailsModule,
    ToolsModule
  ]
})
export class StockLotUsineHistoricModule { }
