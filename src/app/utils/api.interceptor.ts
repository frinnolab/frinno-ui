import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.clone({
      withCredentials:true
    })
    return next.handle(request);
  }
}


export const apiInterceptorProviders = [
  {
    provide:HTTP_INTERCEPTORS, useClass:ApiInterceptor, multi:true
  }
];