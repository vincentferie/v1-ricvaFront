import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'ng2-archwizard/dist';

import { DechargementCreateRoutingModule } from './dechargement-create-routing.module';
import { DechargementCreateComponent } from './dechargement-create.component';
import { DechargementFormModule } from '../dechargement-form/dechargement-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [DechargementCreateComponent],
  imports: [
    CommonModule,
    ArchwizardModule,
    DechargementCreateRoutingModule,
    DechargementFormModule,
    ToolsModule
  ]
})
export class DechargementCreateModule { }
