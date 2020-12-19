import { TestBed } from '@angular/core/testing';

import { ClientTrackingService } from './client-tracking.service';

describe('ClientTrackingService', () => {
  let service: ClientTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
