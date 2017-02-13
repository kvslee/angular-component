import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HomeModule} from "./home/home.module";
import {ServicesModule} from "./service/service.module";

@NgModule({
  imports:      [ BrowserModule, HomeModule, ServicesModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
