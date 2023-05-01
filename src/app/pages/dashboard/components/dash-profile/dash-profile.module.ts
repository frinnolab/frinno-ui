import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashProfileRoutingModule } from './dash-profile-routing.module';
import { DashProfileComponent } from './dash-profile.component';


@NgModule({
  declarations: [
    DashProfileComponent
  ],
  imports: [
    CommonModule,
    DashProfileRoutingModule
  ]
})
export class DashProfileModule { }
