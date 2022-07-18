import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';

import { RoleHistoricRoutingModule } from './role-historic-routing.module';
import { RoleHistoricComponent } from './role-historic.component';
import { RoleFormModule } from '../role-form/role-form.module';
import { RoleDetailsModule } from '../role-details/role-details.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RoleHistoricComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    RoleHistoricRoutingModule,
    RoleFormModule,
    RoleDetailsModule,
    SharedModule
  ]
})
export class RoleHistoricModule { }
