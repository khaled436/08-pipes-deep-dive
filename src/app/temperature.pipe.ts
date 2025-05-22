import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform{
  transform(value: string|number) {

    let val:number;
    if(typeof value === 'string'){
      val = parseFloat(value);
    } else {
      val = value;
    }

    const transformedValue = val * 1.8 + 32;

    return `${transformedValue}°F`;
  }

}
