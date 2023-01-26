import { PointsPipe } from './points.pipe';

describe('PointsPipe', () => {
  it('create an instance', () => {
    const pipe = new PointsPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return string in the singular', () => {
    const pipe = new PointsPipe();
    expect(pipe.transform(1)).toEqual('1 point');
  });
  it('should return string in the singular', () => {
    const pipe = new PointsPipe();
    const number = Math.round(Math.random() * 1000 + 2);
    expect(pipe.transform(number)).toEqual(number + ' points');
  });
});
