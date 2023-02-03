import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NavItem } from '../navigation.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navs:NavItem[] = [
    {
      Title:'Notes',
      Url:'',
      IsActive:true
    },
    {
      Title:'Projects',
      Url:'Projects',
      IsActive:false
    },
    {
      Title:'About',
      Url:'About',
      IsActive:false
    },
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onNavigate(route:NavItem)
  {
    switch(route.Url)
    {
      //Notes
      case this.navs[0].Url:
        route.IsActive = false;
        this.navs[0].IsActive = true;
        this.navs[1].IsActive = false;
        this.navs[2].IsActive = false;
        this.router.navigateByUrl(`${route.Url}`);
        break
        case this.navs[1].Url:
          route.IsActive = false;
          //Projects
          this.navs[1].IsActive = true;
          this.navs[0].IsActive = false;
          this.navs[2].IsActive = false;
          this.router.navigateByUrl(`${route.Url}`);

          break
          case this.navs[2].Url:
            route.IsActive = false;
            this.navs[0].IsActive = false;
            this.navs[1].IsActive = false;
          //About
        this.navs[2].IsActive = true;
        this.router.navigateByUrl(`${route.Url}`);
        break
    }
  }

}
