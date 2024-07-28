import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ButtonComponent,
  HeaderComponent,
  FooterComponent,
  LinkButtonComponent,
} from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    LinkButtonComponent,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    LinkButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
