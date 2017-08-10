import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data$: Observable<any>;

  ngOnInit() {
    this.data$ = this._simulateRequest();
  }

  private _simulateRequest(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      console.log('模擬request發生了...');
      observer.next({ foo: 'bar' });
      observer.complete();
    });
  }
}
