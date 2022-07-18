import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroitAdhesionHistoricRoutingModule } from './droit-adhesion-historic-routing.module';
import { DroitAdhesionHistoricComponent } from './droit-adhesion-historic.component';
import { DroitAdhesionFormModule } from '../droit-adhesion-form/droit-adhesion-form.module';
import { DroitAdhesionDetailsModule } from '../droit-adhesion-details/droit-adhesion-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [DroitAdhesionHistoricComponent],
  imports: [
    CommonModule,
    DroitAdhesionHistoricRoutingModule,
    DroitAdhesionFormModule,
    DroitAdhesionDetailsModule,
    ToolsModule
  ]
})
export class DroitAdhesionHistoricModule { }
