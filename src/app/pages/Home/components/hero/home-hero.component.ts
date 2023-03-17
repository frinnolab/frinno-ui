import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css']
})
export class HomeHeroComponent implements OnInit {

  dummyBuilds:any[] =
  [
    {
      id:1,
      title:`Web`
    },
    {
      id:2,
      title:`Mobile`
    },
    {
      id:3,
      title:`Design`
    },
  ]

  currentBuild:any= {
    id:0,
    title:`...`
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  onViewProfile(){
    this.router.navigateByUrl('/about')
  }
  ngAfterViewInit()
  {
    setInterval(()=>{
      switch (this.currentBuild.id) {
        case 0:
          this.currentBuild = this.dummyBuilds[0]
          break;
        case 1:
            this.currentBuild = this.dummyBuilds[1]
          break;
        case 2:
              this.currentBuild = this.dummyBuilds[2]
          break;

        default:
          this.currentBuild = this.dummyBuilds[0]
          break;
      }
    },3500);
  }
}
