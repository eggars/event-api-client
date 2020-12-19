import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('getEvents() calls correct endpoint', () => {
    const expected = '/api/events/getEvents';
  });

  xit('getEvents() calls correct endpoint', () => {
    const expected = '/api/events/getEvent';
  });
});
