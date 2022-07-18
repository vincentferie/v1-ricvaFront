import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreHistoricRoutingModule } from './membre-historic-routing.module';
import { MembreHistoricComponent } from './membre-historic.component';
import { MembreFormModule } from '../membre-form/membre-form.module';
import { MembreDetailsModule } from '../membre-details/membre-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [MembreHistoricComponent],
  imports: [
    CommonModule,
    MembreHistoricRoutingModule,
    MembreFormModule,
    MembreDetailsModule,
    ToolsModule
  ]
})
export class MembreHistoricModule { }
