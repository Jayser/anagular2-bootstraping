import { Component, Input, Output, EventEmitter } from '@angular/core';
import { course } from '../shared/interfaces/course.interface';

@Component({
  selector: 'courses-list-item',
  styleUrls: ['courses-item.component.scss'],
  templateUrl: 'courses-item.template.html'
})

export class CoursesItemComponent {
  @Input() public course: course[];
  @Output() private deleteCourse = new EventEmitter();

  public handleDeleteCourse(course: course[]) {
      this.deleteCourse.emit(course);
  }
}
