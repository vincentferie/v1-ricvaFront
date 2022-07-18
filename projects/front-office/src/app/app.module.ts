import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsModule } from 'projects/tools/src/public-api';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolsModule
  ],
  providers: [
    {provide: 'API_URL', useValue: environment.apiUrl},
    {provide: 'APP_NAME', useValue: 'FRONT_OFFICE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
