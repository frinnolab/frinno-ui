import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of, retry } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginRequest, LoginResponse } from 'src/app/data/dtos/auth/auth-dto.model';
import { StorageService } from 'src/app/utils/storage.service';

// @Injectable({
//   providedIn: 'root'
// })

export namespace AuthGuard {
  export const canActivate = 
  (route:ActivatedRouteSnapshot, state:RouterStateSnapshot)=>{
    const authService = inject(AuthService);
    const storageService = inject(StorageService);
    const router = inject(Router);
    const data:LoginRequest = {};

    console.log(route.data);
    return authService.login(route.data)
    .pipe(
      map(()=>true),
      catchError(()=>{
        router.navigateByUrl('/error');
        return of (false);
      })
    )
  };

  export const canActivateChild = 
  (route:ActivatedRouteSnapshot, state:RouterStateSnapshot)=>canActivate(route, state);
}