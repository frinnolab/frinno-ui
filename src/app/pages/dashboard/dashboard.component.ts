import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/core/navigation.model';
import { LoginResponse } from 'src/app/data/dtos/auth/auth-dto.model';
import { Profile } from 'src/app/data/entities/profile-entity';
import { ProfileService } from 'src/app/utils/services/profile-service/profile.service';
import { StorageService } from 'src/app/utils/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  navs:any[] = [
    {
      id:0,
      title:'Dashboard',
      icon:'fas fa-home',
      isActive:false
    },
    {
      id:1,
      title:'Profile',
      icon:'fas fa-address-card',
      isActive:false
    },
    {
      id:2,
      title:'Projects',
      icon:'fas fa-terminal',
      isActive:false
    },
    {
      id:3,
      title:'Resume',
      icon:'fas fa-file-alt',
      isActive:false
    },
  ]

  currentUser:LoginResponse = {}
  profile:Profile = {};
  totalProfiles: number = 0;
  profiles:Profile[] = [];
  currentSection:any = { }

  constructor(
    private router:Router,
    private session:StorageService,
    private profileService:ProfileService
  ) { }

  ngOnInit(): void {

    if(!this.session.isLoggedIn())
    {
      this.profile = {};
      this.session.clearSession();
      this.router.navigateByUrl("/login");
    }
    else{
      this.currentUser = this.session.getCurrentUser()  ;
      this.currentSection = this.navs[0];
      this.currentSection.isActive = true;
      this.switchNav(this.currentSection)

      this.fetchProfile(`${this.currentUser['id']}`);
    }

    
  }

  fetchProfile(profile_id:string)
  {
    this.profileService.getProfile(profile_id).pipe()
    .subscribe((res)=>{
      if(res)
      { 
        this.profile = res
      }
    })
  }
  fetchProfiles(query:string='')
  {
    this.profileService.getAll(query).pipe()
    .subscribe((res)=>{
      if(res)
      {

        //Deprecated Here. To remove
        console.log('Profiles');
        
        console.log(res);
        //this.totalProfiles = res['totalItems']
      }
      else
      {
        console.log("error from server");
        
      }
    }
    )
  }

  switchNav(nav:any)
  {

    this.currentSection = nav;
    switch (nav.id) {
      case 0:
        this.navs[0].isActive = true;
        this.navs[1].isActive = false;
        this.navs[2].isActive = false;
        this.navs[3].isActive = false;
        break;
      case 1:
        this.navs[0].isActive = false;
        this.navs[1].isActive = true;
        this.navs[2].isActive = false;
        this.navs[3].isActive = false;
        break;
      case 2:
        this.navs[0].isActive = false;
        this.navs[1].isActive = false;
        this.navs[2].isActive = true;
        this.navs[3].isActive = false;
        break;
      case 3:
        this.navs[0].isActive = false;
        this.navs[1].isActive = false;
        this.navs[2].isActive = false;
        this.navs[3].isActive = true;
        break;
    }


  }

  onHomeRoute()
  {
    this.router.navigate(['/'])
  }

  onLogOut=()=>{
    this.session.clearSession();
    this.router.navigateByUrl('/')
  }

  ngAfterViewInit()
  {
    if(!this.profile)
    {
      this.onLogOut();
    }
  }

  ngOnDestroy()
  {
    this.profile = {};
  }

}
