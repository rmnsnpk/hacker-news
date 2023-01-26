import { of } from 'rxjs';
import { expectedTopic } from './expected-topic.mock';

export const topicServiceMock = {
  getTopicById: jasmine.createSpy().and.returnValue(of(expectedTopic)),
};
