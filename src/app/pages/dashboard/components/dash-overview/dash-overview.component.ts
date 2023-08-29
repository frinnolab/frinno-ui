import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/data/entities/profile-entity';
import { StorageService } from 'src/app/utils/storage.service';

@Component({
  selector: 'app-dash-overview',
  templateUrl: './dash-overview.component.html',
  styleUrls: ['./dash-overview.component.css']
})
export class DashOverviewComponent implements OnInit {
  /**
   *
   */

  @Output() selectedTab = new EventEmitter<any>()

  profile:Profile = {};
  sections:any[] = [
    {
      id:1,
      title:`Profile`,
      count:0,
      icon:`icon`,
      avatar:`fas fa-address-card`
    },
    // {
    //   id:2,
    //   title:`Articles`,
    //   count:0,
    //   icon:`icon`,
    //   avatar:`fas fa-book`
    // },
    {
      id:3,
      title:`Projects`,
      count:0,
      icon:`icon`,
      avatar:`fas fa-terminal`
    },
    {
      id:4,
      title:`Resume`,
      count:0,
      icon:`icon`,
      avatar:`fas fa-file-alt`
    }
  ]
  constructor(
    private storage:StorageService
  ) {

  }
  ngOnInit(): void {

    
    
  }

  switchSection(section:any)
  {
    //alert(section.title)
    this.selectedTab.emit(section)
  }
}


