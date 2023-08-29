import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-action',
  templateUrl: './header-action.component.html',
  styleUrls: ['./header-action.component.css']
})
export class HeaderActionComponent implements OnInit {

  
  socials:any[] = [
    {
      id:0,
      name:`LinkedIn`,
      icon:`assets/svgs/brands/linkedin.svg`,
      url:``
    },
    {
      id:1,
      name:`Twitter - X`,
      icon:`assets/svgs/brands/twitter.svg`,
      url:``
    },
    {
      id:2,
      name:`Youtube`,
      icon:`assets/svgs/brands/youtube.svg`,
      url:``
    },
    {
      id:3,
      name:`Twitch`,
      icon:`assets/svgs/brands/twitch.svg`,
      url:``
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
