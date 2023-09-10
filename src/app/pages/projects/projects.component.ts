import { Component, OnInit } from '@angular/core';
import { DummyProject } from '../about/components/about-projects/about-projects.component';
import { Project } from 'src/app/data/entities/project/project-entity';
import { ProjectsService } from 'src/app/utils/services/projects-service/projects.service';
import { Subject, takeUntil } from 'rxjs';
import { damp } from 'three/src/math/MathUtils';
import { Dialog } from '@angular/cdk/dialog';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  stackList:any[] = [
    {
      title:`Frontend`,
      tools:[
        'Angular 14 upgraded to 15',
        'Angular Material UI',
        'Tailwind CSS',
        'Vercel Hosting'
      ],
      url:`github.com/frinno-ui`
    },
    {
      title:`Backend`,
      tools:[
        'DotNet Core 7 Web API',
        'SQL Server Database',
        'Windows Hosting'
      ],
      url:`github.com/frinno-io`
    },
  ]

  sortOptions:any[]=[
    {
      id:0,
      index:null,
      text:`All`,
      value:`all`
    },
    {
      id:1,
      index:0,
      text:`Fullstack`,
      value:`fullstack`
    },
    {
      id:2,
      index:1,
      text:`Backend`,
      value:`backend`
    },
    {
      id:3,
      index:2,
      text:`Frontend`,
      value:`frontend`
    },
    {
      id:4,
      index:3,
      text:`Mobile`,
      value:`mobile`
    },
    {
      id:5,
      index:4,
      text:`Graphics`,
      value:`graphics`
    },
  ]

  sortedOption:any = {};

  projects:Project[] = []
  $subscribe= new Subject<Project>();
  totalProjects:number = 0;
  constructor(
    private projectService:ProjectsService,
    public dialog: Dialog
  ) { }

  ngOnInit(): void {

    this.fetchAllProjects();

    console.log(this.projects);
    
  }

  ngAfterViewInit(){
    this.sortedOption = this.sortOptions[0]
  }

  fetchAllProjects=()=>{
    this.projectService.getAll()
    .pipe(takeUntil(this.$subscribe))
    .subscribe((data)=>{
      if(data)
      {
        this.totalProjects = data?.response?.totalItems ?? 0;
        this.projects =[...this.mapProjects(data?.response?.data)];
        
        console.table(this.projects);
      }
    })


  }

  onView=(project_id:number)=>{
    if(project_id>0)
    {
      let ref = this.dialog.open(ProjectOverviewComponent, {
        minHeight:`auto`,
        minWidth:`450px`,
        data:{
          id:`${project_id}`
        },
        panelClass: 'my-dialog'
      });
    }
  }

  mapProjects=(data:any[]):Project[]=>{

    let response:Project[] = data.map((p)=>{
      return {
        id:p?.id,
        title:`${p?.title}`,
        description:`${p?.description}`,
        project_url:`${p?.projectUrl}`,
        project_repo_url:`${p?.repositoryUrl}`,
        project_status:p?.status,
        project_type:p?.projectType,
        is_repo_public: Boolean(p?.IsRepoPublic) 
      }
    })

    return response;
  }

  onSortChange=(e:any)=>{


    let option_id = (e.target as HTMLSelectElement).value;

    console.log(option_id);
    
  }

  ngOnDestroy()
  {
    this.projects = [];
    this.$subscribe.unsubscribe();
  }



}
