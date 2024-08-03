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
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
