import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

import { DashProjectRoutingModule } from './dash-project-routing.module';
import { DashProjectComponent } from './dash-project.component';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [DashProjectComponent],
  imports: [
    CommonModule,
    DashProjectRoutingModule,
    ToolsModule,
    NgbProgressbarModule
  ]
})
export class DashProjectModule { }
