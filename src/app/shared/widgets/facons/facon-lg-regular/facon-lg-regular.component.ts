import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-facon-lg-regular',
  templateUrl: './facon-lg-regular.component.html',
  styleUrls: ['./facon-lg-regular.component.css']
})
export class FaconLgRegularComponent implements OnInit {
  @Input()icon:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
