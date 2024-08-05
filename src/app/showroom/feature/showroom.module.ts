import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowroomRoutingModule } from './showroom-routing.module';
import { ShowroomComponent } from './showroom.component';
import {
  BreadcrumbComponent,
  ButtonComponent,
  LinkButtonComponent,
  PageComponent,
} from '../../shared';
import { GalleryComponent } from '../../shared';

@NgModule({
  declarations: [ShowroomComponent],
  imports: [
    CommonModule,
    ShowroomRoutingModule,
    PageComponent,
    BreadcrumbComponent,
    ButtonComponent,
    LinkButtonComponent,
    GalleryComponent,
  ],
})
export class ShowroomModule {}
