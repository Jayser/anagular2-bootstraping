import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../shared/interfaces/course.interface';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'courses-delete',
  templateUrl: 'courses-delete.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesDeleteComponent {
  @Input() private course: Course;

  constructor(private coursesService: CoursesService) {}

  public handleDeleteCourse(course: Course) {
    this.coursesService.removeItem(course.id);
  }
}
