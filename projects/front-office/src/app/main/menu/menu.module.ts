import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ToolsModule, WINDOW_PROVIDERS } from 'projects/tools/src/public-api';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ToolsModule
  ],
  providers: [WINDOW_PROVIDERS]
})
export class MenuModule { }
