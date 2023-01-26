import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'points',
})
export class PointsPipe implements PipeTransform {
  transform(value: number): string {
    return value === 1 ? value + ' point' : value + ' points';
  }
}
