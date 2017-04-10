import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'login',
  templateUrl: './edit-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EditCourseComponent {
  private courseId: number;
  public model = {};

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router) {

    this.route.params.subscribe((params: Params) => {
      this.courseId = +params['id'];
    });

    this.model = this.coursesService.getItemById(this.courseId);
  }

  handleCancel() {
    this.router.navigateByUrl('/courses');
  }

  public onSubmit({ value: { title, creatingDate, duration, description } }) {
    this.coursesService.updateItem(this.courseId, {
      id: this.courseId,
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
