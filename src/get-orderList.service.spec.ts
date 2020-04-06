/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetOrderListService } from './get-orderList.service';

describe('Service: GetOrderList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOrderListService]
    });
  });

  it('should ...', inject([GetOrderListService], (service: GetOrderListService) => {
    expect(service).toBeTruthy();
  }));
});
