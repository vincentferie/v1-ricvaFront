import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';

import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    LightboxModule
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
