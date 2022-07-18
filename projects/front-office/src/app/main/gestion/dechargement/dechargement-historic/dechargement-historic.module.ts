import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DechargementHistoricRoutingModule } from './dechargement-historic-routing.module';
import { DechargementHistoricComponent } from './dechargement-historic.component';
import { DechargementFormModule } from '../dechargement-form/dechargement-form.module';
import { DechargementDetailsModule } from '../dechargement-details/dechargement-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [DechargementHistoricComponent],
  imports: [
    CommonModule,
    DechargementHistoricRoutingModule,
    DechargementFormModule,
    DechargementDetailsModule,
    ToolsModule
  ]
})
export class DechargementHistoricModule { }
