import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
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

@NgModule({
  imports: [
    RouterModule,
    AddCourseModule,
    EditCourseModule,
    CommonModule,
    FormsModule,
    HttpModule,
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
  exports: [
    CoursesAddComponent,
    CoursesListComponent
  ]
})

export class CoursesModule { }
