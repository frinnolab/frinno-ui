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
      url:`https://www.linkedin.com/in/frank-leons-malisawa-94511716b/`
    },
    {
      id:1,
      name:`Twitter - X`,
      icon:`assets/svgs/brands/twitter.svg`,
      url:`https://twitter.com/frinno_io`
    },
    {
      id:2,
      name:`Youtube`,
      icon:`assets/svgs/brands/youtube.svg`,
      url:`https://youtube.com/@frinno_io`
    },
    {
      id:3,
      name:`Twitch`,
      icon:`assets/svgs/brands/twitch.svg`,
      url:`https://www.twitch.tv/frinno_io`
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
