import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../shared/interfaces/course.interface';

@Component({
  selector: 'courses-list-item',
  styleUrls: ['courses-item.component.scss'],
  templateUrl: 'courses-item.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesItemComponent {
  @Input() public course: Course[];

  constructor(private router: Router) { }

  handleEdit(id) {
    this.router.navigate(['/edit-course', id]);
  }
}
