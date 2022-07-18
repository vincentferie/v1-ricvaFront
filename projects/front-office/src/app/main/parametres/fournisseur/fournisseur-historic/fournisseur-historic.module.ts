import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurHistoricRoutingModule } from './fournisseur-historic-routing.module';
import { FournisseurHistoricComponent } from './fournisseur-historic.component';
import { FournisseurFormModule } from '../fournisseur-form/fournisseur-form.module';
import { FournisseurDetailsModule } from '../fournisseur-details/fournisseur-details.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [FournisseurHistoricComponent],
  imports: [
    CommonModule,
    FournisseurHistoricRoutingModule,
    FournisseurFormModule,
    FournisseurDetailsModule,
    ToolsModule
  ]
})
export class FournisseurHistoricModule { }
