import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';

import { UtilisateurHistoricRoutingModule } from './utilisateur-historic-routing.module';
import { UtilisateurHistoricComponent } from './utilisateur-historic.component';
import { UtilisateurFormModule } from '../utilisateur-form/utilisateur-form.module';
import { UtilisateurDetailsModule } from '../utilisateur-details/utilisateur-details.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UtilisateurHistoricComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    UtilisateurHistoricRoutingModule,
    UtilisateurFormModule,
    UtilisateurDetailsModule,
    SharedModule
  ]
})
export class UtilisateurHistoricModule { }
