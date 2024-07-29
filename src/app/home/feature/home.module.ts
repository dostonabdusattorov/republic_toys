import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
  ButtonComponent,
  HeaderComponent,
  FooterComponent,
  LinkButtonComponent,
  BreadcrumbComponent,
} from '../../shared';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    LinkButtonComponent,
    BreadcrumbComponent,
  ],
})
export class HomeModule {}
