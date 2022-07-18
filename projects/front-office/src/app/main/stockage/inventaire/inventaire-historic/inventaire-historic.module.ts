import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventaireHistoricRoutingModule } from './inventaire-historic-routing.module';
import { InventaireHistoricComponent } from './inventaire-historic.component';
import { InventaireFormModule } from '../inventaire-form/inventaire-form.module';
import { InventaireDetailsModule } from '../inventaire-details/inventaire-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [InventaireHistoricComponent],
  imports: [
    CommonModule,
    InventaireHistoricRoutingModule,
    InventaireFormModule,
    InventaireDetailsModule,
    ToolsModule
  ]
})
export class InventaireHistoricModule { }
