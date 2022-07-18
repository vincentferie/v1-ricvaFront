import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashCrmRoutingModule } from './dash-crm-routing.module';
import { DashCrmComponent } from './dash-crm.component';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [DashCrmComponent],
  imports: [
    CommonModule,
    DashCrmRoutingModule,
    ToolsModule
  ]
})
export class DashCrmModule { }
