import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain',
})
export class DomainExtractorPipe implements PipeTransform {
  transform(url: string): string {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/
    );
    return match ? match[1] : url;
  }
}
