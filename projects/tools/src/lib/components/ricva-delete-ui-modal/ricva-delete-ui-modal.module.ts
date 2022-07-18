import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RicvaDeleteUiModalComponent } from './ricva-delete-ui-modal.component';
import { ModalModule } from '..';


@NgModule({
  declarations: [RicvaDeleteUiModalComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [RicvaDeleteUiModalComponent]
})
export class RicvaDeleteUiModalModule { }
