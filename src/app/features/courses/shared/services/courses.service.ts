import { Injectable } from '@angular/core';

import { Course } from '../interfaces/course.interface';
import { COURSES } from '../mocks/mock-courses';

@Injectable()
export class CoursesService {
  private courses: Course[] = COURSES;

  public getList(): Course[] {
    return this.courses;
  }

  public getItemById(id: number): Course | null {
    return (id || id === 0) ? this.courses[id] : null;
  }

  public createItem(item: Course): void {
    this.courses.push(item);
  }

  public updateItem(id: number, item: Course): boolean {
    const course = this.getItemById(id);

    if (course) {
      this.courses[id] = { ...course, ...item };
      return true;
    }

    return false;
  }

  public removeItem(id: number): boolean {
    const idx = this.courses.findIndex((course) => course.id === id);

    if ((id || id === 0)) {
      this.courses.splice(idx, 1);
      return true;
    }

    return false;
  }

  public size(): number {
    return this.courses.length;
  }
}
