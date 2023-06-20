import { Component, OnInit } from '@angular/core';
import { RegisterRequest, RegisterResponse } from 'src/app/data/dtos/auth/auth-dto.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  ngOnInit(): void {


  }

  onRegister()
  {
    //this.auth.setCount(2);
    alert('Registering Account....!')
    let data:RegisterRequest = {
      "firstName": "Client T",
      "lastName": "Test00",
      "email": "client00@client.com",
      "password": "12345678",
      "role":2,
      "addressInfo": {
        "mobile": "+2473838302023",
        "city": "Ciotoa"
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
