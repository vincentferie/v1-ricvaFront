import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'ng2-archwizard';

import { ButtonWizardComponent } from './button-wizard.component';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [ButtonWizardComponent],
  exports: [ButtonWizardComponent]
})
export class ButtonWizardModule { }
