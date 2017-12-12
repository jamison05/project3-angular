import { TestBed, inject } from '@angular/core/testing';

import { CommerceApiService } from './commerce-api.service';

describe('CommerceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommerceApiService]
    });
  });

  it('should be created', inject([CommerceApiService], (service: CommerceApiService) => {
    expect(service).toBeTruthy();
  }));
});
