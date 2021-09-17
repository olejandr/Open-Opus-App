import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'worksFilter'
})
export class WorksFilterPipe implements PipeTransform {

  transform(works: any, searchWorks: string = ''): any {
    
    return works.filter((work: any) => work.title.toLowerCase().includes(searchWorks.toLowerCase()))
  }

}
