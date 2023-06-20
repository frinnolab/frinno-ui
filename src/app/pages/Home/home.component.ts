import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  dummyTopics:any[] =
  [
    {
      id:1,
      title:`Software Development`
    },
    {
      id:2,
      title:`UI/UX Design`
    },
    {
      id:3,
      title:`Technology News`
    },
    {
      id:4,
      title:`Tutorial`
    },
    {
      id:5,
      title:`Career`
    },
  ]

  currentTopic:any= {
    id:0,
    title:`...`
  };

  //Builds
  dummyBuilds:any[] =
  [
    {
      id:1,
      title:`Web`,
      description:``,
      projectTypes:[
        {
          title:`Front-End`,
          technologies:["Angular", "Nuxt 3", "Vanilla Js"]
        },
        {
          title:`Back-End`,
          technologies:[".NetCore", "Laravel", "SQL"]
        },
      ]
    },
    {
      id:2,
      title:`Mobile`,
      description:``,
      projectTypes:[
        {
          title:`Mobile (Android, iOS)`,
          technologies:["Flutter", "MAUI (.NetCore)"]
        },

      ]
    },
    {
      id:3,
      title:`Design`,
      description:``,
      projectTypes:[
        {
          title:`Graphics Design`,
          technologies:["Figma", "Adobe Illustrator", "Photoshop"]
        },

      ]
    }
  ]

  currentBuild:any= {
    id:0,
    title:`...`
  };


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.getTopicInterval();
    this.getBuildInterval();
  }

  getBuildInterval = ()=>{
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

  getTopicInterval = ()=>{
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
        case 3:
              this.currentTopic = this.dummyTopics[3]
          break;
        case 4:
              this.currentTopic = this.dummyTopics[4]
          break;

        default:
          this.currentTopic = this.dummyTopics[0]
          break;
      }
    },3500);
  }

}
