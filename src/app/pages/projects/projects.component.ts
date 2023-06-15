import { Component, OnInit } from '@angular/core';
import { DummyProject } from '../about/components/about-projects/about-projects.component';

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

  dataList:DummyProject[] = [
    {
      id:1,
      title:`Exercitationem maxime.`,
      description:`Itaque saepe iure suscipit corporis ad? Ratione eveniet ducimus voluptatibus tempore
      totam, dolorem neque voluptates earum magni.`,
      url:`github/commodi`,
      preview_url:`commodi.com`
    },
    {
      id:2,
      title:`Voluptatibus eligendi.`,
      description:`Nam maxime officia eligendi praesentium labore beatae, voluptatem inventore
      veritatis vel sunt.`,
      url:`github/eligendi`,
      preview_url:`eligendi.com`
    },
    {
      id:3,
      title:`Suscipit esse fugiat.`,
      description:`Quia voluptate saepe labore, quos repudiandae blanditiis rerum eligendi.
      Harum voluptatem labore.`,
      url:`github/fugiat`,
      preview_url:`fugiat.com`
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
