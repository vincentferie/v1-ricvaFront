import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ToolsModule, WINDOW_PROVIDERS } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [ApplicationsComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    ToolsModule
  ],
  providers: [WINDOW_PROVIDERS]
})
export class ApplicationsModule { }
