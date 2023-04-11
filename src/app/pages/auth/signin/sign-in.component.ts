import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private auth:AuthService
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
    },1000);
  }

}
