import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(typeof value == 'number'){
        let a = new Date(+value * 1000);
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[a.getDay()];
    }
    return ""

  }

}
