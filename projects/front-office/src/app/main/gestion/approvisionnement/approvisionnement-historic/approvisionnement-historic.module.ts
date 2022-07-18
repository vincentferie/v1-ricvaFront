import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovisionnementHistoricRoutingModule } from './approvisionnement-historic-routing.module';
import { ApprovisionnementHistoricComponent } from './approvisionnement-historic.component';
import { ApprovisionnementFormModule } from '../approvisionnement-form/approvisionnement-form.module';
import { ApprovisionnementDetailsModule } from '../approvisionnement-details/approvisionnement-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [ApprovisionnementHistoricComponent],
  imports: [
    CommonModule,
    ApprovisionnementHistoricRoutingModule,
    ApprovisionnementFormModule,
    ApprovisionnementDetailsModule,
    ToolsModule
  ]
})
export class ApprovisionnementHistoricModule { }
