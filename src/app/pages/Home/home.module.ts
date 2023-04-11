import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeHeroComponent } from './components/hero/home-hero.component';
import { HomeFeaturedComponent } from './components/featured/home-featured.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeFeaturedComponent
  ],
  exports:[
    HomeComponent,
    HomeHeroComponent,
    HomeFeaturedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule
  ]
})
export class HomeModule { }
