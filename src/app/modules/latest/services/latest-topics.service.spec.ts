import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { expectedIds } from 'test/mocks/expected-ids.mock';
import { LatestTopicsService } from './latest-topics.service';

describe('LatestTopicsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: LatestTopicsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new LatestTopicsService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send http req and return res', () => {
    httpClientSpy.get.and.returnValue(of(expectedIds));
    service.getLatestTopics().subscribe((res) => {
      expect(res).toEqual(expectedIds);
    });
  });
});
