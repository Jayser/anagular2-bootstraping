import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Course } from '../interfaces/course.interface';
import { COURSES } from '../mocks/mock-courses';

@Injectable()
export class CoursesService {
  public courses: BehaviorSubject<Array<Course>> = new BehaviorSubject(COURSES);

  public getItemById(id: number): Course | null {
    return (id || id === 0) ? this.courses.value[id] : null;
  }

  public createItem(item: Course): void {
    this.courses.next(this.courses.value.concat(item));
  }

  public updateItem(id: number, item: Course): boolean {
    const course = this.getItemById(id);

    if (course) {
      const res = this.courses.value;
      res[id] = { ...course, ...item };

      this.courses.next(res);
      return true;
    }

    return false;
  }

  public removeItem(id: number): boolean {
    const idx = this.courses.value.findIndex((course) => course.id === id);

    if ((id || id === 0)) {
      this.courses.next(this.courses.value.splice(idx, 1));
      return true;
    }

    return false;
  }

  public size(): number {
    return this.courses.value.length;
  }
}
