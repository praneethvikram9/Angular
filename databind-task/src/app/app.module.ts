import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Component2Component } from './scenario2/component2/component2.component';
import { Component3Component } from './scenario3/component3/component3.component';
import { Component4Component } from './scenario3/component4/component4.component';
import { Component5Component } from './scenario4/component5/component5.component';
import { Component6Component } from './scenario4/component6/component6.component';
import { ParentComponent } from './scenario5/parent/parent.component';
import { ChildComponent } from './scenario5/child/child.component';
import { GrandchildComponent } from './scenario5/grandchild/grandchild.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component,
    ParentComponent,
    ChildComponent,
    GrandchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
