import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { BreadcrumbComponent, PageComponent } from '../../../shared';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    BreadcrumbComponent,
    PageComponent,
  ],
})
export class ProductListModule {}
