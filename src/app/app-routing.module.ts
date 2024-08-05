import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/feature/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./product/feature/product-shell/product-shell.module').then(
        (m) => m.ProductShellModule
      ),
  },
  {
    path: 'b2b-sales',
    loadChildren: () =>
      import('./b2b-sales/feature/b2b-sales.module').then(
        (m) => m.B2bSalesModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts/feature/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
