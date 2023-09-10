import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectOverviewComponent
  ],
  exports:[
    ProjectsComponent
  ]
  ,
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
