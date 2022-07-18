import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleFullScreenDirective } from './toggle-full-screen.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToggleFullScreenDirective
  ],
  exports: [
    ToggleFullScreenDirective
  ]
})
export class FullScreenModule { }
