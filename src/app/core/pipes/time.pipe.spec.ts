import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  let pipe: TimePipe;
  let dataNow: number;
  beforeEach(() => {
    pipe = new TimePipe();
    dataNow = Math.round(Date.now() / 1000);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return 0 minutes', () => {
    let randomTimeBack = Math.random() * 59;
    expect(pipe.transform(dataNow - randomTimeBack)).toEqual('0 minutes ago');
  });
  it('should return 1 minute', () => {
    let randomTimeBack = Math.random() * 59 + 60;
    expect(pipe.transform(dataNow - randomTimeBack)).toEqual('1 minute ago');
  });
  it('should return more than one minute', () => {
    let randomTimeBack = Math.random() * 3479 + 120;
    expect(pipe.transform(dataNow - randomTimeBack)).toContain(' minutes ago');
  });
  it('should return one hour ', () => {
    let randomTimeBack = Math.random() * 3599 + 3600;
    expect(pipe.transform(dataNow - randomTimeBack)).toEqual('1 hour ago');
  });
  it('should return more than one hour', () => {
    let randomTimeBack = Math.random() * 79199 + 7200;
    expect(pipe.transform(dataNow - randomTimeBack)).toContain(' hours ago');
  });
  it('should return one day ', () => {
    let randomTimeBack = Math.random() * 86399 + 86400;
    expect(pipe.transform(dataNow - randomTimeBack)).toEqual('1 day ago');
  });
  it('should return more than one day', () => {
    let randomTimeBack = Math.random() * 31363199 + 172800;
    expect(pipe.transform(dataNow - randomTimeBack)).toContain(' days ago');
  });
  it('should return more than one day', () => {
    let randomTimeBack = Math.random() * 31536000 + 31536000;
    expect(pipe.transform(dataNow - randomTimeBack)).toEqual(
      'more than a year ago'
    );
  });
});
