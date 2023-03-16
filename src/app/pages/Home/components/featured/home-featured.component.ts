import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-featured',
  templateUrl: './home-featured.component.html',
  styleUrls: ['./home-featured.component.css']
})
export class HomeFeaturedComponent implements OnInit {

  dummySkills:any[] =
  [
    {
      id:0,
      title:`Backend Development`,
      tools:[
        {
          id:0,
          title:`ASP.Net Web API`,
          logo:`assets/svgs/brands/microsoft.svg`,
          language:`C#`
        },
        {
          id:1,
          title:`Laravel Web API`,
          logo:`assets/svgs/brands/laravel.svg`,
          language:`PhP`
        },
      ]
    },
    {
      id:1,
      title:`Frontend Development`,
      tools:[
        {
          id:0,
          title:`Angular SPA`,
          logo:`assets/svgs/brands/angular.svg`,
          language:`Typescript, Javascript`
        },
        {
          id:1,
          title:`Nuxt`,
          logo:`assets/svgs/brands/vuejs.svg`,
          language:`Typescript, Javascript`
        },
      ]
    },
    {
      id:2,
      title:`UI/UX Design`,
      tools:[
        {
          id:0,
          title:`Figma`,
          logo:`assets/svgs/brands/figma.svg`,
          language:`Web/Pc`
        },
      ]
    }
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onViewProjects()
  {
    this.router.navigateByUrl('/projects');
  }

}
