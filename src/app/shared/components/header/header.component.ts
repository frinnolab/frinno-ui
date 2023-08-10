import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/utils/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    private session:StorageService) { }

  ngOnInit(): void {
  }

  onLoginClick()
  {
    if(!this.session.isLoggedIn())
    {
      this.router.navigateByUrl('/login')
    }
    else{
      this.router.navigateByUrl('/account')
    }
  }

  onLogoClick()
  {
    this.router.navigateByUrl('/')
  }

}
