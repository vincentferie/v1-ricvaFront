import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurCreateRoutingModule } from './utilisateur-create-routing.module';
import { UtilisateurCreateComponent } from './utilisateur-create.component';
import { UtilisateurFormModule } from '../utilisateur-form/utilisateur-form.module';
import { ToolsModule } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [UtilisateurCreateComponent],
  imports: [
    CommonModule,
    UtilisateurCreateRoutingModule,
    UtilisateurFormModule,
    ToolsModule
  ]
})
export class UtilisateurCreateModule { }
