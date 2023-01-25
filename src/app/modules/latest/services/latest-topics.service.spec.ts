import { TestBed } from '@angular/core/testing';

import { LatestTopicsService } from './latest-topics.service';

describe('LatestTopicsService', () => {
  let service: LatestTopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestTopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
