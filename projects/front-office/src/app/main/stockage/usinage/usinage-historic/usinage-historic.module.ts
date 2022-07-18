import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsinageHistoricRoutingModule } from './usinage-historic-routing.module';
import { UsinageHistoricComponent } from './usinage-historic.component';
import { UsinageDetailsModule } from '../usinage-details/usinage-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [UsinageHistoricComponent],
  imports: [
    CommonModule,
    UsinageHistoricRoutingModule,
    UsinageDetailsModule,
    ToolsModule
  ]
})
export class UsinageHistoricModule { }
