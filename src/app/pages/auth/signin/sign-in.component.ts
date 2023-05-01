import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn:boolean = false;

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.auth.currentCount.subscribe((d)=>{
      console.log("Count: "+ d);
    })
  }

  onLogin()
  {
    alert('Logging in....!')
    setTimeout(()=>{
      alert('Logged in....!')
      this.isLoggedIn = true;
      if(this.isLoggedIn)
      {
        this.router.navigateByUrl("/account");
      }
    },1000);
  }

}
