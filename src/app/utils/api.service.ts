import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBase:string = environment.apiBase;
  constructor(private server:HttpClient) { }

  get<T>(route:string):Observable<T>
  {
    return this.server.get<T>(`${this.apiBase}/${route}`);
  }

  post<T>(route:string, data:T):Observable<T>
  {
    return this.server.post<T>(`${this.apiBase}/${route}`, data);
  }

  put<T>(route:string, data:T):Observable<T>
  {
    return this.server.put<T>(`${this.apiBase}/${route}`, data);
  }

  delete<T>(route:string):Observable<T>
  {
    return this.server.delete<T>(`${this.apiBase}/${route}`);
  }

}
