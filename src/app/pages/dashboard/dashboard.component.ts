import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/utils/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router:Router,
    private session:StorageService
  ) { }

  ngOnInit(): void {
    if(!this.session.isLoggedIn())
    {
      this.session.clearSession();
      this.router.navigateByUrl("/login");
    }
  }

  onHomeRoute()
  {
    this.router.navigate(['/'])
  }

}
