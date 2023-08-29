import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private session:StorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!this.session.isLoggedIn())
    {
      return next.handle(request);
    }else
    {
      
      const user = this.session.getCurrentUser();
      request = request.clone({
        setHeaders:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${user['token']}`
        }
      });

      return next.handle(request);
    }
    
  }
}


export const apiInterceptorProviders = [
  {
    provide:HTTP_INTERCEPTORS, useClass:ApiInterceptor, multi:true
  }
];