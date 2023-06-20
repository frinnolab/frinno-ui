import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  clearSession=()=>window.sessionStorage.clear();
  saveObject=(key:string, data:any)=>window.sessionStorage.setItem(key, JSON.stringify(data));
  getObject=(key:string)=>window.sessionStorage.getItem(key);
  getCurrentUser=()=>window.sessionStorage.getItem("user");
  removeObject=(key:string)=>window.sessionStorage.removeItem(key);
  isLoggedIn=()=> this.getCurrentUser() !== null ?? false;
}
