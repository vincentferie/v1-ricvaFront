import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenteHistoricRoutingModule } from './vente-historic-routing.module';
import { VenteHistoricComponent } from './vente-historic.component';
import { VenteFormModule } from '../vente-form/vente-form.module';
import { VenteDetailsModule } from '../vente-details/vente-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [VenteHistoricComponent],
  imports: [
    CommonModule,
    VenteHistoricRoutingModule,
    VenteFormModule,
    VenteDetailsModule,
    ToolsModule
  ]
})
export class VenteHistoricModule { }
