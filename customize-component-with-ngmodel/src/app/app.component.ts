import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileDisabled = false;

  user = {
    name: 'wellwind',
    age: '30'
  };
}
