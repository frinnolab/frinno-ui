import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-contact',
  templateUrl: './about-contact.component.html',
  styleUrls: ['./about-contact.component.css']
})
export class AboutContactComponent implements OnInit {

  dataList:AboutContact[] = [
    {
      title:`WhatsApp`,
      description:`+(255)756 589 799`,
      icon:'/brands/square-whatsapp.svg'
    },
    {
      title:`Mobile`,
      description:`+(255)756 589 799`,
      icon:'/solid/phone.svg'
    },
    {
      title:`Twitter`,
      description:`@just_frinno`,
      icon:'/brands/square-twitter.svg'
    },
    {
      title:`Linkedin`,
      description:`Frank Leons`,
      icon:'/brands/linkedin.svg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface AboutContact{
  title?:string;
  description?:string;
  icon?:string;
}
