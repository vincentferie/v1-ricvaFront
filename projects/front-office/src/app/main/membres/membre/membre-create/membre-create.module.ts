import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreCreateRoutingModule } from './membre-create-routing.module';
import { MembreCreateComponent } from './membre-create.component';
import { MembreFormModule } from '../membre-form/membre-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [MembreCreateComponent],
  imports: [
    CommonModule,
    MembreCreateRoutingModule,
    MembreFormModule,
    ToolsModule
  ]
})
export class MembreCreateModule { }
