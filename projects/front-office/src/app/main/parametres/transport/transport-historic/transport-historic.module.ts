import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportHistoricRoutingModule } from './transport-historic-routing.module';
import { TransportHistoricComponent } from './transport-historic.component';
import { TransportFormModule } from '../transport-form/transport-form.module';
import { TransportDetailsModule } from '../transport-details/transport-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [TransportHistoricComponent],
  imports: [
    CommonModule,
    TransportHistoricRoutingModule,
    TransportFormModule,
    TransportDetailsModule,
    ToolsModule
  ]
})
export class TransportHistoricModule { }
