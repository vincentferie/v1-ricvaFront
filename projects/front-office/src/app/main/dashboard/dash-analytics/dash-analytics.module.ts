import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

import { DashAnalyticsRoutingModule } from './dash-analytics-routing.module';
import { DashAnalyticsComponent } from './dash-analytics.component';
import { ToolsModule } from 'projects/tools/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    DashAnalyticsRoutingModule,
    ToolsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgbPopoverModule
  ],
  declarations: [
    DashAnalyticsComponent,
  ]
})
export class DashAnalyticsModule { }
