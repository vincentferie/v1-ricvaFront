import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartSocialeHistoricRoutingModule } from './part-sociale-historic-routing.module';
import { PartSocialeHistoricComponent } from './part-sociale-historic.component';
import { PartSocialeFormModule } from '../part-sociale-form/part-sociale-form.module';
import { PartSocialeDetailsModule } from '../part-sociale-details/part-sociale-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [PartSocialeHistoricComponent],
  imports: [
    CommonModule,
    PartSocialeHistoricRoutingModule,
    PartSocialeFormModule,
    PartSocialeDetailsModule,
    ToolsModule
  ]
})
export class PartSocialeHistoricModule { }
