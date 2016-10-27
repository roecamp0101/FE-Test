import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

   transform(value: any, args: string[]): any {
       let filter = args[0];
       return filter ? value.filter(search=> search.email.indexOf(filter) != -1) : value;
    }

}
