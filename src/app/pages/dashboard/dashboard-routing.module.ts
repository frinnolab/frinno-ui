import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashProfileComponent } from './components/dash-profile/dash-profile.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    pathMatch:'full'
  },
  {
    path:'account-profile',
    component:DashProfileComponent
  },
  {
    path:'account-projects',
    component:DashProfileComponent
  },
  {
    path:'account-articles',
    component:DashProfileComponent
  },
  {
    path:'account-resume',
    component:DashProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
