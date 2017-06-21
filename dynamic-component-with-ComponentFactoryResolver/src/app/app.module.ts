import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { DynamicComponentDirective } from './dynamic-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
