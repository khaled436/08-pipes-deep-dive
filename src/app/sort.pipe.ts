import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: string[]|number[], direction:'acs'|'desc' = 'acs'){
    const sorted = [...value];
    sorted.sort((a,b) => {
      if (a > b){
        return direction==='acs' ? 1 : -1;
      } else if (a < b){
        return direction==='acs' ? -1 : 1;
      } else {
        return 0;
      }
    })
    return sorted;
  }

}
