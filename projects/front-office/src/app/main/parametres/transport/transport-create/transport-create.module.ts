import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportCreateRoutingModule } from './transport-create-routing.module';
import { TransportCreateComponent } from './transport-create.component';
import { TransportFormModule } from '../transport-form/transport-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [TransportCreateComponent],
  imports: [
    CommonModule,
    TransportCreateRoutingModule,
    TransportFormModule,
    ToolsModule
  ]
})
export class TransportCreateModule { }
