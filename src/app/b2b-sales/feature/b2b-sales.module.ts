import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B2bSalesRoutingModule } from './b2b-sales-routing.module';
import { B2bSalesComponent } from './b2b-sales.component';
import {
  BreadcrumbComponent,
  ButtonComponent,
  LinkButtonComponent,
  OrderLinkComponent,
  PageComponent,
} from '../../shared';

@NgModule({
  declarations: [B2bSalesComponent],
  imports: [
    CommonModule,
    B2bSalesRoutingModule,
    PageComponent,
    BreadcrumbComponent,
    OrderLinkComponent,
    ButtonComponent,
    LinkButtonComponent,
  ],
})
export class B2bSalesModule {}
