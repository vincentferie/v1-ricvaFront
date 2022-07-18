import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast.component';
import { ToastrService } from '../../services/toastr.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToastComponent],
  exports: [ToastComponent],
  providers: [ToastrService]
})
export class ToastModule { }
