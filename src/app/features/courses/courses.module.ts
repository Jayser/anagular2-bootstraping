import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule, PopoverModule } from 'ng2-bootstrap';

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
    CommonModule,
    FormsModule,
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  declarations: [
    CoursesViewComponent,
    CoursesAddComponent,
    CoursesDeleteComponent,
    CoursesSearchComponent,
    CoursesItemComponent,
    CoursesListComponent,
    CoursesHighlightDirective,
    CoursesDurationPipe,
    CoursesOrderByPipe
  ],
  exports: [ CoursesListComponent ]
})

export class CoursesModule { }
