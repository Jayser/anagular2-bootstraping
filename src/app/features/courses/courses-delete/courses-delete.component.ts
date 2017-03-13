import { Component, Output, EventEmitter, Input } from '@angular/core';
import { course } from '../shared/interfaces/course.interface';

@Component({
  selector: 'courses-delete',
  templateUrl: 'courses-delete.template.html'
})

export class CoursesDeleteComponent {
  @Input() private course: course[];
  @Output() private deleteCourse = new EventEmitter();

  public handleDeleteCourse(course: course[]) {
    this.deleteCourse.emit(course);
  }
}
