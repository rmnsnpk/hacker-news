import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(dataOfCreating: number): string {
    let dataNow = Math.round(Date.now() / 1000);
    let timeFromCreating = dataNow - dataOfCreating;
    let result;
    switch (true) {
      case timeFromCreating <= 59:
        result = '0 minutes ago';
        break;
      case timeFromCreating <= 119 && timeFromCreating > 60:
        result = '1 minute ago';
        break;
      case timeFromCreating <= 3599 && timeFromCreating > 120:
        result = Math.round(timeFromCreating / 60) + ' minutes ago';
        break;
      case timeFromCreating <= 7199 && timeFromCreating > 3599:
        result = '1 hour ago';
        break;
      case timeFromCreating <= 86399 && timeFromCreating > 7199:
        result = Math.round(timeFromCreating / 3600) + ' hours ago';
        break;
      case timeFromCreating <= 172799 && timeFromCreating > 86399:
        result = '1 day ago';
        break;
      case timeFromCreating <= 31535999 && timeFromCreating > 172799:
        result = Math.round(timeFromCreating / 86400) + ' days ago';
        break;
      default:
        result = 'more than a year ago';
    }
    return result;
  }
}
