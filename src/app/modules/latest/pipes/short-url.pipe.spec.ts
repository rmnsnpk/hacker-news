import { ShortUrlPipe } from './short-url.pipe';

describe('LinkPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortUrlPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return slitted url', () => {
    const pipe = new ShortUrlPipe();
    expect(
      pipe.transform('https://angular.io/guide/testing-code-coverage')
    ).toEqual('angular.io');
  });
  it('should return slitted url without www', () => {
    const pipe = new ShortUrlPipe();
    expect(
      pipe.transform('https://www.angular.io/guide/testing-code-coverage')
    ).toEqual('angular.io');
  });
});
