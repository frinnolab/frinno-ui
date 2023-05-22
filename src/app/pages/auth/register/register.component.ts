import { Component, OnInit } from '@angular/core';
import { RegisterRequest, RegisterResponse } from 'src/app/data/dtos/auth/auth-dto.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  testUser:RegisterResponse = {};
  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(): void {


  }

  onRegister()
  {
    //this.auth.setCount(2);
    alert('Registering Account....!')
    let data:RegisterRequest = {
      "firstName": "client2",
      "lastName": "string2",
      "email": "client@string2",
      "password": "client@2@string",
      "role":2,
      "addressInfo": {
        "mobile": "client2 string",
        "city": "client2 string"
      }
    }

    setTimeout(()=>{
      this.auth.register(data, "")
      .subscribe((data)=>{
        if(data)
        {
          this.testUser = data

          console.log(this.testUser);

        }
      })
      alert('Account Registered...!')
    },1000);
  }

  ngAfterViewInit()
  {
    this.auth.currentCount.subscribe((d)=>{
      console.log(d);

    })
  }

}
