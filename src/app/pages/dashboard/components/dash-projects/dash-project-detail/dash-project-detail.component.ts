import { Component, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA, Dialog, DialogRef } from '@angular/cdk/dialog';
import { Project, ProjectOverView } from 'src/app/data/entities/project/project-entity';
import { StorageService } from 'src/app/utils/storage.service';
import { ProjectsService } from 'src/app/utils/services/projects-service/projects.service';
import { take, takeUntil } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dash-project-detail',
  templateUrl: './dash-project-detail.component.html',
  styleUrls: ['./dash-project-detail.component.css']
})
export class DashProjectDetailComponent implements OnInit {

  /**
   *Project Detail
   */

   project_id:number = 0;
   profile_id:string = ''

   projectDetail:Project = {};

   project_form = new FormGroup({
    title : new FormControl(""),
    description : new FormControl(""),
    url : new FormControl(""),
    status : new FormControl(""),
   })

  constructor
  (
    private session:StorageService,
    private projectService:ProjectsService,
    public dialogRef: DialogRef<any>, 
    @Inject(DIALOG_DATA) public data: any
    ) {}
  ngOnInit(): void {
    this.profile_id = this.session.getCurrentUser()['id'];
    this.project_id = Number(this.data['id']);

    if(this.project_id>0)
    {
      this.onFetchProject(this.project_id);
    }
    

    if(this.projectDetail)
    {
      this.setForm(this.projectDetail)
    }
  }

  setForm(data:Project)
  {
    this.project_id = Number(data?.id);
    this.project_form.get('title')?.setValue(data?.title ?? '');
    this.project_form.get('description')?.setValue(data?.description ?? '');
    this.project_form.get('url')?.setValue(data?.project_url ?? '');
    this.project_form.get('status')?.setValue(`${data?.project_status ?? 0}`);
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

  onUpdateProject=()=>{

    let data = 
    {
      id:this.projectDetail?.id ?? this.project_id ?? 0,
      title:`${this.project_form.value?.title}`,
      description:`${this.project_form?.value.description}`,
      url:`${this.project_form.value?.url}`,
      status: Number(`${this.project_form.value?.status}`) 
    }

    if(data['id']>0)
    {
      //Update  project
      this.projectService.updateProject(this.projectDetail.id, this.profile_id, data )
      .pipe(take(1))
      .subscribe((res)=>{
        if(res)
        {
          alert("Project Updated...");
          this.dialogRef.close(res);
        }
      })
    }else{
      //Create new project
      this.projectService.createProject(this.profile_id, data)
      .pipe(take(1))
      .subscribe((res)=>{
        if(res)
        {
          alert("Project created...");
          this.dialogRef.close(res);
        }
      })
    }


  }

  mapProject=(data:any):Project=>{
    
    console.log(data);
    
    var pj:ProjectOverView = {
      id:data['id'],
      created:`${data?.created}`,
      modified:`${data?.modified}`,
      project_start:`${data?.projectStart}`,
      project_end:`${data?.projectEnd}`,
      duration:`${'End Date - Start Date'}`,
      title:`${data?.title}`,
      description:`${data?.description}`,
      project_url:`${data?.projectUrl}`,
      is_repo_public:data?.isRepoPublic,
      project_repo_url:`${data?.repositoryUrl}`,
      project_status: Number(`${data?.status ?? 0}`),
      project_type: Number(`${data?.projectType ?? 0}`),
      clientInfo: data?.clientInfo,
      companyAgencyInfo: data?.companyAgencyInfo,
    };

    return pj;
  }

  onClearForm()
  {
    this.project_form.reset();

    this.dialogRef.close();
  }
}
