import { Injectable } from '@angular/core';

@Injectable()
export class AsyncService {

  theNumber: number;

  constructor() {
    this.theNumber = 0;
  }

  theMethod() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.theNumber = 10;
        resolve();
      }, 1000);
    });
  }
}
