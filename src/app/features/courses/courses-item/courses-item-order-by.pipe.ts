import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../shared/interfaces/course.interface'

@Pipe({name: 'coursesOrderBy'})
export class CoursesOrderByPipe implements PipeTransform {
  transform(origin: Course[], field: string): Course[] {
    return origin.sort((a: Course, b: Course): boolean => (a[field] < b[field]));
  }
}
