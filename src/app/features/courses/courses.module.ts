import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule, PopoverModule } from 'ng2-bootstrap';

import { AddCourseModule } from './add-course';
import { EditCourseModule } from './edit-course';

import { CoursesViewComponent } from './courses-view';
import { CoursesAddComponent } from './courses-add';
import { CoursesSearchComponent } from './courses-search';
import { CoursesListComponent } from './courses-list';
import { CoursesItemComponent } from './courses-item';
import { CoursesDeleteComponent } from './courses-delete';

import { CoursesHighlightDirective } from './courses-item';

import { CoursesDurationPipe } from './courses-item';
import { CoursesOrderByPipe } from './courses-item';

import { CoursesService } from './shared/services/courses.service';

@NgModule({
  imports: [
    AddCourseModule,
    EditCourseModule,
    CommonModule,
    FormsModule,
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  declarations: [
    CoursesViewComponent,
    CoursesAddComponent,
    CoursesAddComponent,
    CoursesDeleteComponent,
    CoursesSearchComponent,
    CoursesItemComponent,
    CoursesListComponent,
    CoursesHighlightDirective,
    CoursesDurationPipe,
    CoursesOrderByPipe
  ],
  providers: [ CoursesService ],
  exports: [
    CoursesAddComponent,
    CoursesListComponent
  ]
})

export class CoursesModule { }
