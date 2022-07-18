import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashSaleRoutingModule } from './dash-sale-routing.module';
import { DashSaleComponent } from './dash-sale.component';
import { ToolsModule } from 'projects/tools/src/public-api';

@NgModule({
  declarations: [
    DashSaleComponent
  ],
  imports: [
    CommonModule,
    DashSaleRoutingModule,
    ToolsModule
  ]
})
export class DashSaleModule { }
