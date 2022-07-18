import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartSocialeCreateRoutingModule } from './part-sociale-create-routing.module';
import { PartSocialeCreateComponent } from './part-sociale-create.component';
import { PartSocialeFormModule } from '../part-sociale-form/part-sociale-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [PartSocialeCreateComponent],
  imports: [
    CommonModule,
    PartSocialeCreateRoutingModule,
    PartSocialeFormModule,
    ToolsModule
  ]
})
export class PartSocialeCreateModule { }
