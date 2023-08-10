import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashProfileComponent } from './dash-profile.component';

const routes: Routes = [
  {
    path:'account-profile',
    component:DashProfileComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashProfileRoutingModule { }
