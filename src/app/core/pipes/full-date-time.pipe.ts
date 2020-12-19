import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'fullDateTime'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  readonly customFormats = {
    full: `EEEE, MMMM d, y 'um' HH:mm:ss`
  } as any;

  constructor() {
    super('de-DE');
  }

  transform(value: any, format = 'full'): any {
    const dateTimeFormat = this.customFormats[format] || format;
    return `am ${super.transform(value, dateTimeFormat)} Uhr`;
  }
}
