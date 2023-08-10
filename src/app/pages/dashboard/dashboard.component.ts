import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/core/navigation.model';
import { LoginResponse } from 'src/app/data/dtos/auth/auth-dto.model';
import { StorageService } from 'src/app/utils/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser:LoginResponse = {}
  currentSection:any = { }

  navs:any[] = [
    {
      id:0,
      title:'Dashboard',
      url:'/account',
      isActive:false
    },
    {
      id:1,
      title:'Profile',
      url:'',
      isActive:false
    },
    {
      id:2,
      title:'Articles',
      url:'',
      isActive:false
    },
    {
      id:3,
      title:'Projects',
      url:'',
      isActive:false
    },
    {
      id:4,
      title:'Resume',
      url:'',
      isActive:false
    },
  ]

  constructor(
    private router:Router,
    private session:StorageService
  ) { }

  ngOnInit(): void {

    //console.log(JSON.parse(this.session.getCurrentUser()));
    
    
    if(!this.session.isLoggedIn())
    {
      console.log(this.session.isLoggedIn());
      this.session.clearSession();
      this.router.navigateByUrl("/login");
    }
    else{
      this.currentUser = this.session.getCurrentUser()  ;
  
      this.currentSection = this.navs[0];
      //this.currentSection.isActive = true;
      let currentNav = this.navs.filter((x)=>x.url === this.router.url);
      this.switchNav(this.currentSection)
    }

    
  }

  switchNav(nav:any)
  {
    this.currentSection = {};
    switch (nav.id) {
      case 0:
        this.currentSection = this.navs[nav.id]
        //this.currentSection.isActive = true;
        break;
        case 1:
          this.currentSection = this.navs[nav.id]
          //this.currentSection.isActive = true;
        break;
      default:
        this.currentSection = this.navs[nav.id];
        break;
    }
    
    // if(this.currentSection.id !== nav.id)
    // {
    //   this.currentSection = nav
    //   this.currentSection.isActive = true;
    //   //this.router.navigateByUrl(nav.url)
    // }


  }

  onHomeRoute()
  {
    this.router.navigate(['/'])
  }

  onLogOut=()=>{
    this.session.clearSession();
    this.router.navigateByUrl('/')
  }

}
