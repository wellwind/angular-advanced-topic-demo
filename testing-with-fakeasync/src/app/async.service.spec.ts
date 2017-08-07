import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {

  let testTarget: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncService]
    });

    testTarget = TestBed.get(AsyncService);
  });

  it('呼叫theMethod之後theNumber應該為10', fakeAsync(() => {
    testTarget.theMethod();
    tick(500);
    expect(testTarget.theNumber).toBe(0);
    tick(500);
    expect(testTarget.theNumber).toBe(10);
  }));
});
