import { Component, Input } from '@angular/core';

import { Course } from '../shared/interfaces/course.interface';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'courses-delete',
  templateUrl: 'courses-delete.template.html',
  providers: [ CoursesService ]
})

export class CoursesDeleteComponent {
  @Input() private course: Course;

  constructor(private coursesService: CoursesService) {}

  public handleDeleteCourse(course: Course) {
    this.coursesService.removeItem(course.id);
  }
}
