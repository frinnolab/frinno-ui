import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/utils/services/profile-service/profile.service';

@Component({
  selector: 'app-dash-profile',
  templateUrl: './dash-profile.component.html',
  styleUrls: ['./dash-profile.component.css']
})
export class DashProfileComponent implements OnInit {

  constructor(
    private profileService:ProfileService
  ) { }

  ngOnInit(): void {
  }

  fetchAllProfiles()
  {
    this.profileService.getAll()
    .pipe()
    .subscribe((data)=>{
      if(data){
        console.table(data);
      }
    })
  }

}
