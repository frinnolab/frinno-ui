import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/data/entities/project/project-entity';

@Component({
  selector: 'app-dash-projects',
  templateUrl: './dash-projects.component.html',
  styleUrls: ['./dash-projects.component.css']
})
export class DashProjectsComponent implements OnInit {

  /**
   *Projects Resource
   */

  projects:Project[] = [];
  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}
