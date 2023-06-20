import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginRequest, RegisterRequest } from 'src/app/data/dtos/auth/auth-dto.model';
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

  signInForm:FormGroup = new FormGroup({
    email:new FormControl("Enter Email address", 
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
  }

  onLogin()
  {
    alert('Logging in....!')
    var data:LoginRequest = 
    {
      email:`${this.signInForm.get("email")?.value}`,
      password:`${this.signInForm.get("pasword")?.value}`,
    };
    this.auth.login(data)
    .pipe(takeUntil(this.$subscribe))
    .subscribe((res)=>{
      if(res)
      {
        
        this.storage.saveObject("profile", res)
        console.log(res);
        alert('Logged in....!')
        this.isLoggedIn = true;
        
      }
    })
  }

}
