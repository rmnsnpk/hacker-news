import { of } from 'rxjs';
import { expectedIds } from './expected-ids.mock';

export const latestTopicsServiceMock = {
  getLatestTopics: jasmine.createSpy().and.returnValue(of(expectedIds)),
};
