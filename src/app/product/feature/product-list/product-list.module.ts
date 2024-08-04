import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import {
  BreadcrumbComponent,
  ButtonComponent,
  OrderLinkComponent,
  PageComponent,
} from '../../../shared';
import { PaginationComponent, ToyBoxComponent } from '../../ui';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    BreadcrumbComponent,
    PageComponent,
    OrderLinkComponent,
    ButtonComponent,
    PaginationComponent,
    ToyBoxComponent,
  ],
})
export class ProductListModule {}
