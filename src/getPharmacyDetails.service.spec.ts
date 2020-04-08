/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPharmacyDetailsService } from './getPharmacyDetails.service';

describe('Service: GetPharmacyDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPharmacyDetailsService]
    });
  });

  it('should ...', inject([GetPharmacyDetailsService], (service: GetPharmacyDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
