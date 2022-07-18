import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenteCreateRoutingModule } from './vente-create-routing.module';
import { VenteCreateComponent } from './vente-create.component';
import { VenteFormModule } from '../vente-form/vente-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [VenteCreateComponent],
  imports: [
    CommonModule,
    VenteCreateRoutingModule,
    VenteFormModule,
    ToolsModule
  ]
})
export class VenteCreateModule { }
