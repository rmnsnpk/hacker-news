import { MultipleOrSinglePipe } from './multiple-or-single.pipe';

describe('PointsPipe', () => {
  let pipe: MultipleOrSinglePipe;
  beforeEach(() => {
    pipe = new MultipleOrSinglePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return string in the singular', () => {
    expect(pipe.transform(1, 'point')).toEqual('1 point');
  });
  it('should return string in the multiple', () => {
    const number = Math.round(Math.random() * 1000 + 2);
    expect(pipe.transform(number, 'point')).toEqual(number + ' points');
  });
});
