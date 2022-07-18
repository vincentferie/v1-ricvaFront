import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementTypeRoutingModule } from './movement-type-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovementTypeRoutingModule,
    SharedModule
  ]
})
export class MovementTypeModule { }
