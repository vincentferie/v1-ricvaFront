import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturationCreateRoutingModule } from './facturation-create-routing.module';
import { FacturationCreateComponent } from './facturation-create.component';
import { FacturationFormModule } from '../facturation-form/facturation-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [FacturationCreateComponent],
  imports: [
    CommonModule,
    FacturationCreateRoutingModule,
    FacturationFormModule,
    ToolsModule
  ]
})
export class FacturationCreateModule { }
