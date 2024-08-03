import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
  ButtonComponent,
  FooterComponent,
  LinkButtonComponent,
  BreadcrumbComponent,
  OrderLinkComponent,
  PageComponent,
  EmailFormComponent,
  ClientsSliderComponent,
} from '../../shared';
import {
  AccordionComponent,
  CarouselComponent,
  CategoryBoxComponent,
  TestimonialListComponent,
} from '../ui';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonComponent,
    FooterComponent,
    LinkButtonComponent,
    BreadcrumbComponent,
    OrderLinkComponent,
    PageComponent,
    CarouselComponent,
    CategoryBoxComponent,
    TestimonialListComponent,
    AccordionComponent,
    EmailFormComponent,
    ClientsSliderComponent,
  ],
})
export class HomeModule {}
