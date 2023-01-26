import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link',
})
export class LinkPipe implements PipeTransform {
  transform(value: string): string {
    let shortUrl = value.split('/')[2];
    if (shortUrl.startsWith('www.')) {
      return shortUrl.substring(4);
    }
    return shortUrl;
  }
}
