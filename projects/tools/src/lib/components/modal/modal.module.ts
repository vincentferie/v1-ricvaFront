import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { UiModalComponent } from './ui-modal/ui-modal.component';
import { AnimationModalComponent } from './animation-modal/animation-modal.component';
import { ModalSlideComponent } from './modal-slide/modal-slide.component';

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule
  ],
  declarations: [UiModalComponent, AnimationModalComponent, ModalSlideComponent],
  exports: [UiModalComponent, AnimationModalComponent, ModalSlideComponent]
})
export class ModalModule { }
