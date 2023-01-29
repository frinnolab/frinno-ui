import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFeaturedComponent } from './widgets/home-featured/home-featured.component';
import { HomeHeroComponent } from './widgets/home-hero/home-hero.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeFeaturedComponent,
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
