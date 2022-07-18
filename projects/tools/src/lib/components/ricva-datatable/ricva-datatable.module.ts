import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RicvaDatatableComponent } from './ricva-datatable.component';

@NgModule({
  declarations: [RicvaDatatableComponent],
  imports: [
    CommonModule
  ],
  exports: [RicvaDatatableComponent]
})
export class RicvaDatatableModule { }
