import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortUrl',
  standalone: true,
})
export class ShortUrlPipe implements PipeTransform {
  transform(url: string): string {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/
    );
    return match ? match[1] : url;
  }
}
