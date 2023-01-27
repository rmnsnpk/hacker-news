import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { expectedIds } from 'test/mocks/expected-ids.mock';
import { expectedTopic } from 'test/mocks/expected-topic.mock';

import { TopicsService } from './topics.service';

describe('TopicsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: TopicsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TopicsService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should send http req and return res', () => {
    httpClientSpy.get.and.returnValue(of(expectedTopic));
    service.getTopicById(123).subscribe((res) => {
      expect(res).toEqual(expectedTopic);
    });
  });
  it('should send http req and return res', () => {
    httpClientSpy.get.and.returnValue(of(expectedIds));
    service.getLatestTopics().subscribe((res) => {
      expect(res).toEqual(expectedIds);
    });
  });
});
