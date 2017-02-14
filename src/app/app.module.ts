import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ServicesModule} from "./service/service.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,

      ServicesModule.forRoot(),
      AppRoutingModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
