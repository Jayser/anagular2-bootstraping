import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../shared/interfaces/course.interface'

@Pipe({name: 'coursesOrderBy'})
export class CoursesFilterPipe implements PipeTransform {
  transform(origin: Course[], query: string) {
    return query ? origin.filter(({ title }) => title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : origin;
  }
}
