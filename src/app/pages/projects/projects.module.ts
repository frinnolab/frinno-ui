import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    ProjectsComponent
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
