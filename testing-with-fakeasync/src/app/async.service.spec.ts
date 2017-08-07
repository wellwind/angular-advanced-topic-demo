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

  it('假設theMethod非同步但不會延遲1000毫秒，直接用tick()就好', fakeAsync(() => {
    spyOn(testTarget, 'theMethod').and.callFake(() => {
      setTimeout(() => {
        testTarget.theNumber = 999;
      });
    });
    testTarget.theMethod();
    tick();
    expect(testTarget.theNumber).toBe(999);
  }));
});
