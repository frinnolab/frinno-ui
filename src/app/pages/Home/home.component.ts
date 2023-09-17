import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/utils/services/profile-service/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  //Builds
  dummyBuilds:any[] =
  [
    {
      id:1,
      icon:`fa fa-paint-roller`,
      title:`Client Apps`,
      description:`Client facing Applications with modern frontend Frameworks`,
      projectTypes:[
        {
          title:`Front-End Tools`,
          technologies:["Angular","Vanilla Js"]
        },
      ]
    },
    {
      id:2,
      icon:`fa fa-server`,
      title:`Server Apps`,
      description:``,
      projectTypes:[
        {
          title:`Back-End Tools`,
          technologies:[".NetCore", "Laravel", "SQL", "System design"]
        },
      ]
    },
    {
      id:3,
      icon:`fa fa-palette`,
      title:`Graphic Presentations`,
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

  contactForm = new FormGroup({
    sender_fullname:new FormControl(""
    ,[Validators.required]),
    sender_company:new FormControl(""),
    sender_role:new FormControl(""),
    sender_email:new FormControl("",
    [Validators.email,Validators.required] ),
    sender_mobile:new FormControl(""
    ,[Validators.required]),
    sender_message:new FormControl("",
    [Validators.required]),
  })

  constructor(
    private router:Router,
    private ps:ProfileService
  ) { }

  ngOnInit(): void {
  }

  onSendContact = ()=>
  {
    console.log(this.contactForm.value);

    var data = {
      "fullname": this.contactForm.value.sender_fullname,
      "senderEmail": this.contactForm.value.sender_email,
      "mobile": this.contactForm.value.sender_mobile,
      "company": this.contactForm.value.sender_company,
      "roleOcupation": this.contactForm.value.sender_role,
      "messageBody": this.contactForm.value.sender_message
    }

    this.ps.sendTestMail(data)
    .subscribe((s)=>{

      if(s)
      {
        alert("Mail has been sent to Frank.!")
      }
    })

    
  }

  onClearForm=()=>{
    this.contactForm.get('sender_fullname')?.setValue("");
    this.contactForm.get('sender_company')?.setValue("");
    this.contactForm.get('sender_email')?.setValue("");
    this.contactForm.get('sender_mobile')?.setValue("");
    this.contactForm.get('sender_role')?.setValue("");
    this.contactForm.get('sender_message')?.setValue("");
  }

  ngAfterViewInit(){
    this.getBuildInterval();
  }

  onViewProjects=()=>{
    this.router.navigateByUrl('/projects');
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



}
