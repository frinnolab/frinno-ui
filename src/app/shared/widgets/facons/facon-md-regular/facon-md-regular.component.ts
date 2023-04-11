import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-facon-md-regular',
  templateUrl: './facon-md-regular.component.html',
  styleUrls: ['./facon-md-regular.component.css']
})
export class FaconMdRegularComponent implements OnInit {
  @Input()icon:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
