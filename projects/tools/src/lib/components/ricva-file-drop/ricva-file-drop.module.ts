import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RicvaFileDropComponent } from './ricva-file-drop.component';
import { FileDropModule } from '..';

@NgModule({
  declarations: [RicvaFileDropComponent],
  imports: [
    CommonModule,
    FileDropModule
  ],
  exports: [RicvaFileDropComponent]
})
export class RicvaFileDropModule { }

