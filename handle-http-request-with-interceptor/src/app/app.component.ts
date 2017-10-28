import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data$: Observable<any>;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.data$ = this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
