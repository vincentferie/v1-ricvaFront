import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurCreateRoutingModule } from './fournisseur-create-routing.module';
import { FournisseurCreateComponent } from './fournisseur-create.component';
import { FournisseurFormModule } from '../fournisseur-form/fournisseur-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [FournisseurCreateComponent],
  imports: [
    CommonModule,
    FournisseurCreateRoutingModule,
    FournisseurFormModule,
    ToolsModule
  ]
})
export class FournisseurCreateModule { }
