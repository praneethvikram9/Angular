import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Component2Component } from './scenario2/component2/component2.component';
import { Component3Component } from './scenario3/component3/component3.component';
import { Component4Component } from './scenario3/component4/component4.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
