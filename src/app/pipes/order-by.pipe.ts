import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, term?: any): any {
    if (term) {
      if (term === '+') {
        return value.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
      } else if ( term === '-') {
        return value.sort((a, b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0));
      }
    } else {
      return value;
    }
  }
}