import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './detail/project-detail.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailComponent

  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  exports:[
    ProjectsComponent,
    ProjectDetailComponent
  ]
})
export class ProjectsModule { }
