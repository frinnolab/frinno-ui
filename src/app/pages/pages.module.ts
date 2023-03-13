import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeFeaturedComponent } from './home/components/featured/home-featured.component';
import { HomeAsideComponent } from './home/components/aside/home-aside.component';
import { HomeHeroComponent } from './home/components/hero/home-hero.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeFeaturedComponent,
    HomeAsideComponent,
    HomeHeroComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports:[
    HomeComponent,
    HomeFeaturedComponent,
    HomeAsideComponent,
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }
