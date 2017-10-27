import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountExistValidatorDirective } from './account-exist-validator.directive';
import { FormsModule, NG_ASYNC_VALIDATORS } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountExistValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
