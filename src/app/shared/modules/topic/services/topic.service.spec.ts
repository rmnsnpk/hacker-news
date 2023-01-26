import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { expectedTopic } from 'test/mocks/expected-topic.mock';

import { TopicService } from './topic.service';

describe('TopicService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: TopicService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TopicService(httpClientSpy);
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
});
