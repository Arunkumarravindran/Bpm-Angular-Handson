import { TestBed } from '@angular/core/testing';

import { GetDoctorDetailsService } from './get-doctor-details.service';

describe('GetDoctorDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDoctorDetailsService = TestBed.get(GetDoctorDetailsService);
    expect(service).toBeTruthy();
  });
});
