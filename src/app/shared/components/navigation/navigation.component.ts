import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavItem } from 'src/app/core/navigation.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navs:NavItem[] = [
    {
      title:'Home',
      url:'/home',
      isActive:false
    },
    {
      title:'Projects',
      url:'/projects',
      isActive:false
    },
    // {
    //   title:'Articles',
    //   url:'/articles',
    //   isActive:false
    // },
    {
      title:'About',
      url:'/about',
      isActive:false
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    let currentNav = this.navs.filter((x)=>x.url === this.router.url);
    this.switchNav(currentNav[0])
  }

  switchNav(nav:NavItem)
  {
    if(nav.url === this.router.url)
    {
      nav.isActive = true;
      this.router.navigateByUrl(nav.url)
    }
  }

}
