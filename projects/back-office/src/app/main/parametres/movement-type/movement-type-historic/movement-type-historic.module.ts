import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';

import { MovementTypeHistoricRoutingModule } from './movement-type-historic-routing.module';
import { MovementTypeHistoricComponent } from './movement-type-historic.component';
import { MovementTypeFormModule } from '../movement-type-form/movement-type-form.module';
import { MovementTypeDetailsModule } from '../movement-type-details/movement-type-details.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MovementTypeHistoricComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    MovementTypeHistoricRoutingModule,
    MovementTypeFormModule,
    MovementTypeDetailsModule,
    SharedModule
  ]
})
export class MovementTypeHistoricModule { }
