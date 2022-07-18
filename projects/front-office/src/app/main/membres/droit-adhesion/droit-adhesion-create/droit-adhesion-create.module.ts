import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroitAdhesionCreateRoutingModule } from './droit-adhesion-create-routing.module';
import { DroitAdhesionCreateComponent } from './droit-adhesion-create.component';
import { DroitAdhesionFormModule } from '../droit-adhesion-form/droit-adhesion-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [DroitAdhesionCreateComponent],
  imports: [
    CommonModule,
    DroitAdhesionCreateRoutingModule,
    DroitAdhesionFormModule,
    ToolsModule
  ]
})
export class DroitAdhesionCreateModule { }
