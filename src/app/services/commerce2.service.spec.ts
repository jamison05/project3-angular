import { TestBed, inject } from '@angular/core/testing';

import { Commerce2Service } from './commerce2.service';

describe('Commerce2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Commerce2Service]
    });
  });

  it('should be created', inject([Commerce2Service], (service: Commerce2Service) => {
    expect(service).toBeTruthy();
  }));
});
