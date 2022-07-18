import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventaireCreateRoutingModule } from './inventaire-create-routing.module';
import { InventaireCreateComponent } from './inventaire-create.component';
import { InventaireFormModule } from '../inventaire-form/inventaire-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [InventaireCreateComponent],
  imports: [
    CommonModule,
    InventaireCreateRoutingModule,
    InventaireFormModule,
    ToolsModule
  ]
})
export class InventaireCreateModule { }
