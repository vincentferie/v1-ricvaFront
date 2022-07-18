import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonActionsComponent } from './button-actions.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  declarations: [ButtonActionsComponent],
  exports: [ButtonActionsComponent]
})
export class ButtonActionsModule { }
