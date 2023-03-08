import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-projects',
  templateUrl: './about-projects.component.html',
  styleUrls: ['./about-projects.component.css']
})
export class AboutProjectsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}

export interface DummyProject
{
  id?:number;
  title?:string;
  description?:string;
  url?:string;
  preview_url?:string;
}
