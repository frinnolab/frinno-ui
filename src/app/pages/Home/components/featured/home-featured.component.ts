import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-featured',
  templateUrl: './home-featured.component.html',
  styleUrls: ['./home-featured.component.css']
})
export class HomeFeaturedComponent implements OnInit {

  tools:any[] = [
    // {
    //   id:0,
    //   title:`DotNet`,
    //   icon:`assets/svgs/brands/dotnet-core7-drk.svg`
    // },
    {
      id:1,
      title:`C#`,
      icon:`assets/svgs/brands/csharp-drk.svg`
    },
    {
      id:2,
      title:`Angular`,
      icon:`assets/svgs/brands/angular.svg`
    },
    {
      id:3,
      title:`Tailwind Css`,
      icon:`assets/svgs/brands/tailwindcss-drk.svg`
    },
    {
      id:4,
      title:`SQL`,
      icon:`assets/svgs/solid/database.svg`
    },
    {
      id:5,
      title:`git`,
      icon:`assets/svgs/brands/github.svg`
    },
    {
      id:6,
      title:`figma`,
      icon:`assets/svgs/brands/figma.svg`
    },
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onViewProjects()
  {
    this.router.navigateByUrl('/projects');
  }

}
