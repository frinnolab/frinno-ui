import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-facon-sm-regular',
  templateUrl: './facon-sm-regular.component.html',
  styleUrls: ['./facon-sm-regular.component.css']
})
export class FaconSmRegularComponent implements OnInit {
  @Input()icon:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
