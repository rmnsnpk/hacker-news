import { LinkPipe } from './link.pipe';

describe('LinkPipe', () => {
  it('create an instance', () => {
    const pipe = new LinkPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return slitted url', () => {
    const pipe = new LinkPipe();
    expect(
      pipe.transform('https://angular.io/guide/testing-code-coverage')
    ).toEqual('angular.io');
  });
  it('should return slitted url without www', () => {
    const pipe = new LinkPipe();
    expect(
      pipe.transform('https://www.angular.io/guide/testing-code-coverage')
    ).toEqual('angular.io');
  });
});
