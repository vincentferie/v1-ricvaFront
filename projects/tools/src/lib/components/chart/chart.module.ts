import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ApexChartService } from './apex-chart/apex-chart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ApexChartComponent],
  exports: [ApexChartComponent],
  providers: [
    ApexChartService
  ]
})
export class ChartModule { }
