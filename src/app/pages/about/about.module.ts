import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutProfileComponent } from './components/about-profile/about-profile.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutContactComponent } from './components/about-contact/about-contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    AboutComponent,
    AboutProfileComponent,
    AboutProjectsComponent,
    AboutContactComponent
  ],
  exports: [
    AboutComponent,
    AboutProfileComponent,
    AboutProjectsComponent,
    AboutContactComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class AboutModule { }
