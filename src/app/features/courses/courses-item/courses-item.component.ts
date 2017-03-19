import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../shared/interfaces/course.interface';

@Component({
  selector: 'courses-list-item',
  styleUrls: ['courses-item.component.scss'],
  templateUrl: 'courses-item.template.html'
})

export class CoursesItemComponent {
  @Input() public course: Course[];
}
