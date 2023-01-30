import { DomainExtractorPipe } from './domain.pipe';

describe('DomainExtractorPipe', () => {
  let pipe: DomainExtractorPipe;
  beforeEach(() => {
    pipe = new DomainExtractorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return slitted url', () => {
    expect(
      pipe.transform('https://angular.io/guide/testing-code-coverage')
    ).toEqual('angular.io');
  });
  it('should return slitted url without www', () => {
    expect(
      pipe.transform('https://www.angular.io/guide/testing-code-coverage')
    ).toEqual('angular.io');
  });
});
