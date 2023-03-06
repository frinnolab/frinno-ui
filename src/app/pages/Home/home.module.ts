import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './components/home-hero.component';
import { HomeFeaturedComponent } from './components/home-featured.component';
import { HomeAsideComponent } from './components/home-aside.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeFeaturedComponent,
    HomeAsideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
