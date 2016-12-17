import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'short'})
export class ShortPipe implements PipeTransform {
  transform(value: string, size: string): string {
    let len: number = parseInt(size);
    return value.substring(0, len);
  }
}
