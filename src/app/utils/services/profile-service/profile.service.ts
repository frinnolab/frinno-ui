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
  token:string = ''
  headerOptions = {
    
    headers:new HttpHeaders ({
      'Content-type': 'application/json',
    })
  }
  constructor(
    private server:HttpClient,
    private router:Router
    ) {
    }

  getAll(query?:string)
  {
    console.log(this.api);
    
    return this.server.get<any[]>(`${this.api}/${this.path}?${query}`);
  }
}
