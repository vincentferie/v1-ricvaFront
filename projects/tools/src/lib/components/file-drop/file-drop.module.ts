import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFileDropModule } from 'ngx-file-drop';

import { FileDropComponent } from './file-drop.component';

@NgModule({
  declarations: [FileDropComponent],
  imports: [
    CommonModule,
    NgxFileDropModule
  ],
  exports: [
    NgxFileDropModule,
    FileDropComponent
  ]
})
export class FileDropModule { }
