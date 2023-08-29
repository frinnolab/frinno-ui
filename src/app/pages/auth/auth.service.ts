import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from 'src/app/data/dtos/auth/auth-dto.model';
import { ApiService } from 'src/app/utils/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path:string = '';
  loginRoute:string = 'login'
  registerRoute:string = 'register'
  api:string = environment.apiBase;
  constructor(
    private server:HttpClient,
    ) {
      this.path = `${this.api}/auth`;
    }

  login(data:LoginRequest):Observable<LoginResponse>
  {
    return this.server.post<LoginResponse>(`${this.path}/${this.loginRoute}`, data);
  }


  register=(data:RegisterRequest):Observable<RegisterResponse>=>
  {
    return this.server.post<RegisterResponse>(`${this.path}/${this.registerRoute}`, data);
  }
}
