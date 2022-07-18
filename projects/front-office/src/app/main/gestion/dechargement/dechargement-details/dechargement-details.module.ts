import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DechargementDetailsComponent } from './dechargement-details.component';


@NgModule({
  declarations: [DechargementDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [DechargementDetailsComponent]
})
export class DechargementDetailsModule { }
