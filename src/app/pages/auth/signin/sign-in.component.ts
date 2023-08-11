import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse, RegisterRequest } from 'src/app/data/dtos/auth/auth-dto.model';
import { Subject, take, takeUntil } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/utils/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn:boolean = false;

  $subscribe = new Subject();

  signInForm = new FormGroup({
    email:new FormControl("", 
    [
      Validators.required,
      Validators.email]
      ),
    password:new FormControl(
      "Please Enter password",
      [Validators.required]),
  })

  constructor(
    private auth:AuthService,
    private router:Router,
    private storage:StorageService
  ) { }

  ngOnInit(): void {
    if(this.storage.isLoggedIn())
    {
      this.router.navigateByUrl("/account")
    }
    this.signInForm.get("password")?.setValue("");
    this.signInForm.get("email")?.setValue("");
  }

  onLogin()
  {
    alert('Logging in....!')
    var data:LoginRequest = 
    {
      email:`${this.signInForm.get("email")?.value}`,
      password:`${this.signInForm.get("password")?.value}`,
    };

    console.log(data);
    
    this.auth.login(data)
    .pipe(takeUntil(this.$subscribe))
    .subscribe((res)=>{
      if(res)
      {
        var reData:LoginResponse = {
          id:res['id'],
          token:res['token'],
          role:res['role'],
          email:res["email"],
          username:res['username']
        }
        this.storage.saveObject("user",reData)
        alert('Logged in....!')
        this.isLoggedIn = true;
        this.router.navigateByUrl("/account");        
      }
    })
  }

}
