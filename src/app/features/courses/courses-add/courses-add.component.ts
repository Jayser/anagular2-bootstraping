import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'courses-add',
  templateUrl: './courses-add.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesAddComponent {
  constructor(private router: Router) { }

  handleAddCourse() {
    this.router.navigateByUrl('/courses/new');
  }
}
