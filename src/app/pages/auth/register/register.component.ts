import { Component, OnInit } from '@angular/core';
import { RegisterRequest, RegisterResponse } from 'src/app/data/dtos/auth/auth-dto.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  testUser:RegisterResponse = {};
  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  regForm = new FormGroup({
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    email:new FormControl(""),
    password:new FormControl(""),
    confirmPassword:new FormControl(""),
    mobile:new FormControl(""),
    city:new FormControl(""),
  })

  ngOnInit(): void {


  }

  onRegister()
  {
    alert('Registering Account....!')
    let data:RegisterRequest = {
      "firstName": `${this.regForm.get("firstName")?.value}`,
      "lastName": `${this.regForm.get("lastName")?.value}`,
      "email": `${this.regForm.get("email")?.value}`,
      "password": `${this.regForm.get("password")?.value}`,
      "role":2,
      "addressInfo": {
        "mobile": `${this.regForm.get("mobile")?.value}`,
        "city": `${this.regForm.get("city")?.value}`
      }
    }

    setTimeout(()=>{
      this.auth.register(data)
      .subscribe((data)=>{
        if(data)
        {
          this.testUser = data
          alert('Account Registered...!')
          this.router.navigateByUrl("/login");
        }
      })
    },1000);
  }

  ngAfterViewInit()
  {
  }

}
