import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule
  ]
})
export class HomeModule { }
