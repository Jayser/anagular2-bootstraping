import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'coursesDuration'})
export class CoursesDurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const h = Math.floor( minutes / 60);
    const m = minutes % 60;

    return h ? `${h}h.` : '' + `${m}min.`;
  }
}
