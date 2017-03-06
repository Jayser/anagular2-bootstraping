import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ng2-bootstrap';

import { CoursesViewComponent } from './courses-view';
import { CoursesAddComponent } from './courses-add';
import { CoursesSearchComponent } from './courses-search';
import { CoursesListComponent } from './courses-list';
import { CoursesListItemComponent } from './courses-list/courses-list-item';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ ButtonsModule.forRoot(), CommonModule ],
  declarations: [
    CoursesViewComponent,
    CoursesAddComponent,
    CoursesSearchComponent,
    CoursesListItemComponent,
    CoursesListComponent
  ],
  exports: [ CoursesListComponent ]
})

export class CoursesModule { }
