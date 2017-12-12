import { TestBed, inject } from '@angular/core/testing';

import { FishGeneralApiService } from './fish-general-api.service';

describe('FishGeneralApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FishGeneralApiService]
    });
  });

  it('should be created', inject([FishGeneralApiService], (service: FishGeneralApiService) => {
    expect(service).toBeTruthy();
  }));
});
