import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../shared/interfaces/course.interface';

import { CoursesFilterPipe } from './courses-item-filter.pipe';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'courses-list',
  styleUrls: [ './courses-list.component.scss' ],
  templateUrl: './courses-list.template.html',
  providers: [ CoursesService, CoursesFilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesListComponent implements OnInit {
  @Input() filterBy:string;

  public courses: Course[];

  constructor(private coursesService: CoursesService,
              private coursesFilterPipe: CoursesFilterPipe) { }

  ngOnChanges() {
    this.courses = this.coursesFilterPipe.transform(this.courses, this.filterBy);
  }

  public ngOnInit() {
    this.courses = this.coursesService.getList();
  }
}
