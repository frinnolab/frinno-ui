import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  path:string = 'projects';
  api:string = environment.apiBase;


  constructor(
    private server:HttpClient,
  ) { }

  getAll(query:string = "")
  {
    return this.server.get<any>(`${this.api}/${this.path}?${query}`);
  }
  
  getProject=(project_id:number, query:string='')=>{
    return this.server.get<any>(`${this.api}/${this.path}/${project_id}?${query}`);
  }

  updateProject=(project_id:number, profile_id:string, data:{})=>{
    return this.server.put<any>(`${this.api}/${this.path}/${project_id}/${profile_id}`, data);
  }

  createProject=(profile_id:string, data:{})=>{
    return this.server.post<any>(`${this.api}/${this.path}/${profile_id}`, data);
  }

  deleteProject=(project_id:number , profile_id:string)=>{
    return this.server.delete<any>(`${this.api}/${this.path}/${project_id}/${profile_id}`);
  }
}
