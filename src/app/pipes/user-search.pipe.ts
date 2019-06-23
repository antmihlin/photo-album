import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

    transform(items: any[], term: string): any {
      return term
      ? items.filter(item => {
        if (item.name) {
          const nameLower = item.name.toLowerCase();
          const usernameLower = item.username.toLowerCase();
          const emailLower = item.email.toLowerCase();
          const termLower = term.toLowerCase();

          return nameLower.indexOf(termLower) !== -1 ||
          usernameLower.indexOf(termLower) !== -1 ||
          emailLower.indexOf(termLower) !== -1 ;
        }
      })
      : items;
    }
}
