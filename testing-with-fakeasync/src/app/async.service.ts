import { Injectable } from '@angular/core';

@Injectable()
export class AsyncService {

  theNumber: number;

  constructor() {
    this.theNumber = 0;
  }

  theMethod() {
    setTimeout(() => {
      this.theNumber = 10;
    }, 1000);
  }
}
