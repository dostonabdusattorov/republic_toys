import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {
  BreadcrumbComponent,
  ButtonComponent,
  ClientsSliderComponent,
  GalleryComponent,
  LinkButtonComponent,
  OrderLinkComponent,
  PageComponent,
  TestimonialListComponent,
} from '../../shared';
import { CardComponent, PhaseTabComponent, SpecialistsComponent } from '../ui';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    PageComponent,
    BreadcrumbComponent,
    OrderLinkComponent,
    ButtonComponent,
    LinkButtonComponent,
    CardComponent,
    GalleryComponent,
    TestimonialListComponent,
    ClientsSliderComponent,
    PhaseTabComponent,
    SpecialistsComponent,
  ],
})
export class AboutModule {}
