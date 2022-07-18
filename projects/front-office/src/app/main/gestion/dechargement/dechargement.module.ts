import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DechargementRoutingModule } from './dechargement-routing.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DechargementRoutingModule,
    ToolsModule
  ]
})
export class DechargementModule { }
