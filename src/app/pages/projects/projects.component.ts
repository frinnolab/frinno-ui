import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  dummyTopics:any[] =
  [
    {
      id:1,
      title:`Hire`
    },
    {
      id:2,
      title:`Contract`
    },
    {
      id:3,
      title:`Out-Source`
    },
    {
      id:4,
      title:`Assign`
    },
  ]

  currentTopic:any= {
    id:0,
    title:`...`
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
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

        default:
          this.currentTopic = this.dummyTopics[0]
          break;
      }
    },3500);
  }

}
