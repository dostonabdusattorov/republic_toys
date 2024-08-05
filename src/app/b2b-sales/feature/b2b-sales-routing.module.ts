import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bSalesComponent } from './b2b-sales.component';

const routes: Routes = [{ path: '', component: B2bSalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B2bSalesRoutingModule {}
