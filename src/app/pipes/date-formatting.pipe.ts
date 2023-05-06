import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatting'
})
export class DateFormattingPipe implements PipeTransform {

  transform(unixTimestamp: string[]): unknown {
    let a = new Date(+unixTimestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[a.getDay()] + ', ' + months[a.getMonth()] + ' ' + a.getDay() + ' ' + a.getHours() + ':' + a.getMinutes();
  }

}
