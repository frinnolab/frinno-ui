import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css']
})
export class HomeHeroComponent implements OnInit {

  dummyTopics:any[] =
  [
    {
      id:1,
      title:`Fullstack Developer`
    },
    {
      id:2,
      title:`Back-End Developer`
    },
    {
      id:3,
      title:`Front-End Developer`
    }
  ]

  currentTopic:any= {
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
      switch (this.currentTopic.id) {
        case 0:
          this.currentTopic = this.dummyTopics[0]
          break;
        case 1:
            this.currentTopic = this.dummyTopics[1]
          break;
        case 2:
              this.currentTopic = this.dummyTopics[2]
          break;

        default:
          this.currentTopic = this.dummyTopics[0]
          break;
      }
    },3500);
  }
}
