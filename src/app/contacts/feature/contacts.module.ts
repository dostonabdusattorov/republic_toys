import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import {
  BreadcrumbComponent,
  ButtonComponent,
  EmailFormComponent,
  LinkButtonComponent,
  PageComponent,
} from '../../shared';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    PageComponent,
    BreadcrumbComponent,
    ButtonComponent,
    LinkButtonComponent,
    EmailFormComponent,
  ],
})
export class ContactsModule {}
