import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashProjectsComponent } from './components/dash-projects/dash-projects.component';
import { DashProfileComponent } from './components/dash-profile/dash-profile.component';
import { DashArticlesComponent } from './components/dash-articles/dash-articles.component';
import { DashResumeComponent } from './components/dash-resume/dash-resume.component';
import { DashOverviewComponent } from './components/dash-overview/dash-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashProjectDetailComponent } from './components/dash-projects/dash-project-detail/dash-project-detail.component';
@NgModule({
  declarations: [
    DashboardComponent,
    DashProfileComponent,
    DashProjectsComponent,
    DashArticlesComponent,
    DashResumeComponent,
    DashOverviewComponent,
    DashProjectDetailComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
