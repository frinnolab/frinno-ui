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
    pro_password: new FormControl("", [Validators.required]),
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
          firstName:`${data['firstName']}`,
          lastName:`${data['lastName']}`,
          email:`${data['email']}`,
          roleName:`${data['role']}`,
          addressInfo : {
            city:`${data['addressInfo']['city']}`,
            mobile:`${data['addressInfo']['mobile']}`,
            country:`${data['addressInfo']['country']}`
          },
          stats:{
            totalArticles:data['totalArticles'],
            totalProjects:data['totalProjects'],
          }
          
        }

        console.log(data);
        
        this.setProfileForm(this.profile);
      }
    },)
  }

  setProfileForm = (profile:Profile)=>{
    this.profile_form.get('pro_city')?.setValue(`${profile?.addressInfo?.city ?? ''}`);
    this.profile_form.get('pro_country')?.setValue(`${profile?.addressInfo?.country ?? ''}`);
    this.profile_form.get('pro_email')?.setValue(`${profile?.email ?? ''}`);
    this.profile_form.get('pro_password')?.setValue(``);
    this.profile_form.get("pro_uname")?.setValue(`${profile?.username ?? ''}`);
    this.profile_form.get("pro_fname")?.setValue(`${profile?.firstName ?? ''}`);
    this.profile_form.get("pro_lname")?.setValue(`${profile?.lastName ?? ''}`);
    this.profile_form.get("pro_mob")?.setValue(`${profile?.addressInfo?.mobile ?? ''}`);
  }

  onUpdateProfile=()=>{
  

    var data:Profile = 
    {
      id:`${this.profile.id}`,
      username:`${this.profile_form.value.pro_uname}`,
      firstName:`${this.profile_form.value.pro_fname}`,
      lastName:`${this.profile_form.value.pro_lname}`,
      email:`${this.profile_form.value.pro_email}`,
      password:`${this.profile_form.value.pro_password ?? ''}`,
      addressInfo : {
        city:`${this.profile_form.value.pro_city}`,
        country:`${this.profile_form.value.pro_country}`,
        mobile:`${this.profile_form.value.pro_mob}`
      }
    }

    this.profileService.updateProfile(this.profile.id,  data)
    .pipe()
    .subscribe((data)=>{
      if(data)
      {
        this.fetchProfile(this.profile_id);

        alert(`Updated: ${this.profile.username}`);
        window.location.reload();
      }
    });

  }

  onCancel=()=>{
    this.profile_form.reset();

    this.fetchProfile(this.profile_id);
  }


  onDestroy()
  {
    this.profile = {};
  }

}
