import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multOrSing',
})
export class MultipleOrSinglePipe implements PipeTransform {
  transform(value: number, word: string): string {
    return `${value} ${word}${value !== 1 ? 's' : ''}`;
  }
}
