import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  path:string = 'profiles';
  api:string = environment.apiBase;
  constructor(
    private server:HttpClient,
    private router:Router
    ) {
    }

  getAll(query:string = "")
  {
    return this.server.get<any>(`${this.api}/${this.path}?${query}`);
  }
  
  getProfile(id:string, query:string = "")
  {
    return this.server.get<any>(`${this.api}/${this.path}/${id}/?${query}`);
  }

  updateProfile(id:string, data:{})
  {
    return this.server.put<any>(`${this.api}/${this.path}/${id}`, data);
  }

  createProfile(data:{})
  {
    return this.server.post<any>(`${this.api}/${this.path}`, data);
  }
  
  deleteProfile(id:string)
  {
    return this.server.delete<any>(`${this.api}/${this.path}/${id}`);
  }
  sendTestMail(data:{})
  {
    return this.server.post<any>(`${this.api}/${this.path}/SendEmail`, data);
  }
}
