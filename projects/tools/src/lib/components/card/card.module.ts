import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimationService, AnimatorModule } from 'css-animator';

import { CardComponent } from './card.component';
import { ToolsModule } from '../../tools.module';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    AnimatorModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: [AnimationService]
})
export class CardModule { }
