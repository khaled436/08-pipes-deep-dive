import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform{
  transform(value: string|number|null, input: "C"|"F", output?: "C"|"F") {

    if (!value) {
      return value;
    }

    let val:number;
    if(typeof value === 'string'){
      val = parseFloat(value);
    } else {
      val = value;
    }

    let transformedValue: number;

    if (input==='C' && output==='F'){
      transformedValue = val * 1.8 + 32;
    } else if (input==='F' && output==='C') {
      transformedValue = (val - 32) / 1.8;
    } else {
      transformedValue = val;
    }

    let symbol = '°C|°F';

    if (!output){
      symbol = input==='C' ? '°C' : '°F';
    } else {
      symbol = output==='C' ? '°C' : '°F';
    }

    return `${transformedValue.toFixed(2)} ${symbol}`;
  }

}
