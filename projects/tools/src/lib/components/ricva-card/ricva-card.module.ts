import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { RicvaCardComponent } from './ricva-card.component';
import { CardModule } from '..';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    CardModule
  ],
  declarations: [RicvaCardComponent],
  exports: [RicvaCardComponent]
})
export class RicvaCardModule { }
