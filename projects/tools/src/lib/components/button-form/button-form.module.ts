import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonFormComponent } from './button-form.component';

@NgModule({
  declarations: [ButtonFormComponent],
  exports: [ButtonFormComponent],
  imports: [
    CommonModule
  ]
})
export class ButtonFormModule { }
