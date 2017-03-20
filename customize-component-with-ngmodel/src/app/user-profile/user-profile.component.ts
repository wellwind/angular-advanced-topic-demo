import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;

  get name() {
    return this.user.name;
  }

  set name(value) {
    this.user.name = value;
  }

  get age() {
    return this.user.age;
  }

  set age(value) {
    this.user.age = value;
  }

  constructor() {
    this.user = {name: 'wellwind'};
  }

  ngOnInit() {
  }

}
