import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDefaultRoutingModule } from './dash-default-routing.module';
import { DashDefaultComponent } from './dash-default.component';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [DashDefaultComponent],
  imports: [
    CommonModule,
    DashDefaultRoutingModule,
    ToolsModule
  ]
})
export class DashDefaultModule { }
