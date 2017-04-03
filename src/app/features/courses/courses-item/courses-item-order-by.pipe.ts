import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'coursesOrderBy'})
export class CoursesOrderByPipe implements PipeTransform {
  transform(origin, field) {
    return origin.sort((a, b) => (a[field] < b[field]));
  }
}
