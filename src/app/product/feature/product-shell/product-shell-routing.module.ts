import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../single-product/single-product.module').then(
        (m) => m.SingleProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductShellRoutingModule {}
