import { TestBed, inject } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {

  let testTarget: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncService]
    });

    testTarget = TestBed.get(AsyncService);
  });

  it('呼叫theMethod之後theNumber應該為10', () => {
    testTarget.theMethod();
    expect(testTarget.theNumber).toBe(10);
  });
});
