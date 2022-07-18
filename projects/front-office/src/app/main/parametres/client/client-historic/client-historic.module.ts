import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHistoricRoutingModule } from './client-historic-routing.module';
import { ClientHistoricComponent } from './client-historic.component';
import { ClientFormModule } from '../client-form/client-form.module';
import { ClientDetailsModule } from '../client-details/client-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [ClientHistoricComponent],
  imports: [
    CommonModule,
    ClientHistoricRoutingModule,
    ClientFormModule,
    ClientDetailsModule,
    ToolsModule
  ]
})
export class ClientHistoricModule { }
