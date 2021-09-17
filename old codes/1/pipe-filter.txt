import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
   
  transform(composers: any, search: string = ''): any {
    if(!search.trim()) return composers;
    return composers.filter((composer: any) => composer.complete_name.toLowerCase().includes(search.toLowerCase()))
  }

}
