import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'login',
  templateUrl: './add-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AddCourseComponent {
  public model = {};

  constructor(private coursesService: CoursesService,
              private router: Router) { }

  handleCancel() {
    this.router.navigateByUrl('/courses');
  }

  public onSubmit({ value: { title, creatingDate, duration, description } }) {
    this.coursesService.createItem({
      id: this.coursesService.size(),
      thumb: 'http://placehold.it/50x50',
      thumbAlt: '',
      title,
      creatingDate,
      topRated: Boolean(Math.round(Math.random())),
      duration: duration,
      description: description
    });
    this.router.navigateByUrl('/courses');
  }
}
