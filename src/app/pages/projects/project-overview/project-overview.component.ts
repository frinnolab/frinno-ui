import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Project } from 'src/app/data/entities/project/project-entity';
import { ProjectsService } from 'src/app/utils/services/projects-service/projects.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  /**
   *
   */
  project_id:number = 0;
  projectDetail:Project = {};
  constructor(
    private projectService:ProjectsService,
    public dialogRef: DialogRef<any>, 
    @Inject(DIALOG_DATA) public data: any
  ) {
    
    
  }
  ngOnInit(): void {
    if(this.data)
    {
      this.project_id = this.data['id'];
      this.onFetchProject(this.project_id);
    }else{
      this.onClose();
    }
    
  }

  onClose=()=>
  {
    this.dialogRef.close();
  }

  onFetchProject=(project_id:number)=>{
    this.projectService.getProject(project_id)
    .pipe(take(1))
    .subscribe((data)=>{
      if(data)
      {
        this.projectDetail =
        this.mapProject(data);
      }
    })
  }

  mapProject=(data:any):Project=>{
    
    console.log(data);
    
    var pj:Project = {
      id:data['id'],
      title:`${data?.title}`,
      description:`${data?.description}`,
      project_url:`${data?.url}`,
      project_status: Number(`${data?.status ?? 0}`),
    };

    return pj;
  }

}
