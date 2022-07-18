import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockLotHistoricRoutingModule } from './stock-lot-historic-routing.module';
import { StockLotHistoricComponent } from './stock-lot-historic.component';
import { StockLotDetailsModule } from '../stock-lot-details/stock-lot-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [StockLotHistoricComponent],
  imports: [
    CommonModule,
    StockLotHistoricRoutingModule,
    StockLotDetailsModule,
    ToolsModule
  ]
})
export class StockLotHistoricModule { }
