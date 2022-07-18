import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatHistoricRoutingModule } from './etat-historic-routing.module';
import { EtatHistoricComponent } from './etat-historic.component';
import { EtatDetailsModule } from '../etat-details/etat-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [EtatHistoricComponent],
  imports: [
    CommonModule,
    EtatHistoricRoutingModule,
    EtatDetailsModule,
    ToolsModule
  ]
})
export class EtatHistoricModule { }
