import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowroomComponent } from './showroom.component';

const routes: Routes = [{ path: '', component: ShowroomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowroomRoutingModule {}
