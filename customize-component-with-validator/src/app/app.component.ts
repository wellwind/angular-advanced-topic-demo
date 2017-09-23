import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSubmit = false;
  profileDisabled = false;

  user = {
    name: '',
    age: ''
  };

  submit() {
    this.isSubmit = !this.isSubmit;
  }
}
