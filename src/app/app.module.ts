import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IfDirective } from './if.directive';
import { IconComponent } from './icon/icon.component';
import { IconDirective } from './icon/icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    IfDirective,
    IconComponent,
    IconDirective
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    IconComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
