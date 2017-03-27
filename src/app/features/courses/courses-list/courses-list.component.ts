import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../shared/interfaces/course.interface';

import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'courses-list',
  styleUrls: [ './courses-list.component.scss' ],
  templateUrl: './courses-list.template.html',
  providers: [ CoursesService ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesListComponent implements OnInit {
  public courses: Course[];

  constructor(private coursesService: CoursesService) { }

  public ngOnInit() {
    this.courses = this.coursesService.getList();
  }
}
