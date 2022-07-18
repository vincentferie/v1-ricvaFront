import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientCreateRoutingModule } from './client-create-routing.module';
import { ClientCreateComponent } from './client-create.component';
import { ClientFormModule } from '../client-form/client-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [ClientCreateComponent],
  imports: [
    CommonModule,
    ClientCreateRoutingModule,
    ClientFormModule,
    ToolsModule
  ]
})
export class ClientCreateModule { }
