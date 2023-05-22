import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from 'src/app/data/dtos/auth/auth-dto.model';
import { ApiService } from 'src/app/utils/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path:string = 'mockauth';
  loginRoute:string = 'login'
  registerRoute:string = 'register'
  api:string = environment.apiBase;

  count = 0;

  currentCount = new BehaviorSubject<number>(this.count);

  constructor(
    private apiService:ApiService,
    private server:HttpClient,
    ) {
      this.path = `${this.api}`
    }

  login(data:LoginRequest):Observable<LoginResponse>
  {
    return this.server.post<LoginResponse>(`${this.path}/${this.loginRoute}`, data);
  }

  register=(data:RegisterRequest, options:string = ""):Observable<RegisterResponse>=>
  {
    return this.server.post<RegisterResponse>(`${this.path}/${this.registerRoute}${options}`, data);
  }

  getPath():string
  {
    return `${this.path}/${this.loginRoute}`
  }

  getCount():Observable<number>
  {
    return this.currentCount;
  }
  setCount(countAdd:number):void
  {
    this.count+=countAdd;
  }
}
