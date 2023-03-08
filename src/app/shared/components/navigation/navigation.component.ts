import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      url:'/',
      isActive:false
    },
    {
      title:'Articles',
      url:'articles',
      isActive:false
    },
    {
      title:'About',
      url:'about',
      isActive:false
    },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
