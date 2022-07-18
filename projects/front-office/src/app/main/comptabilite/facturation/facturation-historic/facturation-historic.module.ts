import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturationHistoricRoutingModule } from './facturation-historic-routing.module';
import { FacturationHistoricComponent } from './facturation-historic.component';
import { FacturationFormModule } from '../facturation-form/facturation-form.module';
import { FacturationDetailsModule } from '../facturation-details/facturation-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [FacturationHistoricComponent],
  imports: [
    CommonModule,
    FacturationHistoricRoutingModule,
    FacturationFormModule,
    FacturationDetailsModule,
    ToolsModule
  ]
})
export class FacturationHistoricModule { }
