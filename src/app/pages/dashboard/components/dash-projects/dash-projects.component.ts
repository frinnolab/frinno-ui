import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthRolesEnum } from 'src/app/data/dtos/auth/auth-roles.enum';
import { DataListDto } from 'src/app/data/dtos/data-list.model';
import { Profile } from 'src/app/data/entities/profile-entity';
import { Project } from 'src/app/data/entities/project/project-entity';
import { ProjectsService } from 'src/app/utils/services/projects-service/projects.service';
import { StorageService } from 'src/app/utils/storage.service';

@Component({
  selector: 'app-dash-projects',
  templateUrl: './dash-projects.component.html',
  styleUrls: ['./dash-projects.component.css']
})
export class DashProjectsComponent implements OnInit {

  /**
   *Projects Resource
   */

  profile_id:string = ''
  profile_role:AuthRolesEnum = AuthRolesEnum.Guest;//Guest
  projects:Project[] = [];
  totalProjects:number = 0;
  constructor(
    private projectService:ProjectsService,
    private session:StorageService,
    private router:Router
  ) {
    
  }

  ngOnInit(): void {
    
    if(this.session.isLoggedIn())
    {
      this.profile_id  = this.session.getCurrentUser()['id'];
      this.profile_role = Number(this.session.getCurrentUser()['role']) ;

      this.fetchAllProjects();
      
    }
  }

  fetchProfileProjects(profile_id:string, query?:string)
  {
    this.projectService.getAllForProfile(profile_id, query)
    .pipe()
    .subscribe((data)=>{
      if(data)
      {
        this.totalProjects = data?.response?.totalItems ?? 0;
        
        this.projects = [...this.mapProjects(data?.response?.data)] ; 
      }
    });
  }

  fetchAllProjects=(query:string = '')=>{
    //Only Admin

    switch ( this.profile_role) {
      case AuthRolesEnum.Administrator:
        this.projectService.getAll(query)
        .pipe()
        .subscribe((data)=>{

          if(data)
          {
           
            this.totalProjects = data?.response?.totalItems ?? 0;
            this.projects = [...this.mapProjects(data?.response?.data)] 
          }
        })
        break;
      default:
        this.fetchProfileProjects(this.profile_id,query);
        break;
    }
  }

  mapProjects=(data:any[]):Project[]=>{
    var response:Project [] = data.map((p,i)=>{
      return {
        id:p?.id,
        title:`${p?.title ?? ''}`,
        description:`${p?.description}`
      }
    })

    return response;
  }

  onAddOrEdit=(project_id:number)=>{
    //redirect to AddEdit Component
  }

  onDelete=(project_id:number)=>
  {
    var pj = this.projects.find((p)=>p.id === project_id)
    alert(`Are you sure you want to delete ${pj?.title}`)
  }

  onView(project_id:number){
    //Open Pop Up
    var pj = this.projects.find((p)=>p.id === project_id)
    alert(`ID:${pj?.id} \n Title:${pj?.title}`);
  }

  onDestroy()
  {
    this.projects = [];
  }

  ngAfterViewInit()
  {
    console.log(this.projects);
    
  }

}
