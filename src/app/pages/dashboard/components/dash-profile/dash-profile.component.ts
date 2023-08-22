import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Profile } from 'src/app/data/entities/profile-entity';
import { ProfileService } from 'src/app/utils/services/profile-service/profile.service';
import { StorageService } from 'src/app/utils/storage.service';

@Component({
  selector: 'app-dash-profile',
  templateUrl: './dash-profile.component.html',
  styleUrls: ['./dash-profile.component.css']
})
export class DashProfileComponent implements OnInit {

  profile_id:string = '';

  profile:Profile = {
    addressInfo : {},
    stats:{}
  };

  constructor(
    private profileService:ProfileService,
    private session:StorageService
  ) { }

  ngOnInit(): void {

    if(this.session.isLoggedIn())
    {
      this.profile_id = this.session.getCurrentUser()['id'];

      this.fetchProfile(this.profile_id);
    }
  }

  fetchProfile=(profile_id:string)=>{
    this.profileService.getProfile(profile_id)
    .pipe(take(1))
    .subscribe((data)=>{
      if(data)
      {

        this.profile = {
          profile_pic:`assets/images/frn_00.jpg`,
          id:data['id'],
          username:`${data['username']}`,
          email:`${data['email']}`,
          roleName:`${data['role']}`,
          addressInfo : {
            city:`${data['addressInfo']['city']}`,
            mobile:`${data['addressInfo']['mobile']}`
          },
          stats:{
            totalArticles:data['totalArticles'],
            totalProjects:data['totalProjects'],
          }
          
        }
      }
    },)
  }

  onDestroy()
  {
    this.profile = {};
  }

}
