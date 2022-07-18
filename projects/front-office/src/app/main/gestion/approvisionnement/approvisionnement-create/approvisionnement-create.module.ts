import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovisionnementCreateRoutingModule } from './approvisionnement-create-routing.module';
import { ApprovisionnementCreateComponent } from './approvisionnement-create.component';
import { ApprovisionnementFormModule } from '../approvisionnement-form/approvisionnement-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [ApprovisionnementCreateComponent],
  imports: [
    CommonModule,
    ApprovisionnementCreateRoutingModule,
    ApprovisionnementFormModule,
    ToolsModule
  ]
})
export class ApprovisionnementCreateModule { }
