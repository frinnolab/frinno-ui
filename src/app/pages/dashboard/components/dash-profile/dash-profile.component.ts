import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  profile_form = new FormGroup({
    pro_pic : new FormControl("",),
    pro_fname: new FormControl("", Validators.required),
    pro_lname: new FormControl(""),
    pro_uname: new FormControl("", Validators.required),
    pro_email: new FormControl("", [Validators.email, Validators.required]),
    pro_role: new FormControl(),
    pro_mob: new FormControl(""),
    pro_city: new FormControl(""),
    pro_country: new FormControl("")
  });

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
        this.setProfileForm(this.profile);
      }
    },)
  }

  setProfileForm = (profile:Profile)=>{

    this.profile_form.get('pro_city')?.setValue(`${profile?.addressInfo?.city}`);
    this.profile_form.get('pro_email')?.setValue(`${profile?.email}`);
    this.profile_form.get("pro_uname")?.setValue(`${profile?.username}`);
    this.profile_form.get("pro_mob")?.setValue(`${profile?.addressInfo?.mobile}`);
  }

  onUpdateProfile=()=>{
  

    //update Profile☺
    var data:Profile = 
    {
      profile_pic:`assets/images/frn_00.jpg`,
      id:`${this.profile.id}`,
      username:`${this.profile_form.value.pro_uname}`,
      email:`${this.profile_form.value.pro_email}`,
      addressInfo : {
        city:`${this.profile_form.value.pro_city}`,
        mobile:`${this.profile_form.value.pro_mob}`
      }
    }

    console.log(data);
    

    //this.profileService.updateProfile(this.profile.id,  data);

  }


  onDestroy()
  {
    this.profile = {};
  }

}
