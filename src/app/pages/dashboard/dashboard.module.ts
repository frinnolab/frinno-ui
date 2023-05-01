import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashSidenavComponent } from './components/dash-sidenav/dash-sidenav.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashSidenavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
