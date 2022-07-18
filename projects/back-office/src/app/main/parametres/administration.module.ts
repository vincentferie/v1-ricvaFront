import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { AdministrationComponent } from './administration.component';
/*import {SimpleNotificationsModule} from 'angular2-notifications';*/

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    ChartModule,
  ],
  declarations: [
    AdministrationComponent
  ]
})
export class AdministrationModule { }
