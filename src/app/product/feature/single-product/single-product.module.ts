import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleProductRoutingModule } from './single-product-routing.module';
import { CarouselComponent, GalleryComponent } from '../../ui';
import { RouterModule } from '@angular/router';
import {
  BreadcrumbComponent,
  ButtonComponent,
  OrderLinkComponent,
  PageComponent,
} from '../../../shared';
import { SingleProductComponent } from './single-product.component';

@NgModule({
  declarations: [SingleProductComponent],
  imports: [
    CommonModule,
    SingleProductRoutingModule,
    RouterModule,
    PageComponent,
    BreadcrumbComponent,
    OrderLinkComponent,
    ButtonComponent,
    GalleryComponent,
    CarouselComponent,
  ],
})
export class SingleProductModule {}
