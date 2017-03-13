import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ng2-bootstrap';

import { CoursesViewComponent } from './courses-view';
import { CoursesAddComponent } from './courses-add';
import { CoursesSearchComponent } from './courses-search';
import { CoursesListComponent } from './courses-list';
import { CoursesItemComponent } from './courses-item';
import { CoursesDeleteComponent } from './courses-delete';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ FormsModule, ButtonsModule.forRoot(), CommonModule ],
  declarations: [
    CoursesViewComponent,
    CoursesAddComponent,
    CoursesDeleteComponent,
    CoursesSearchComponent,
    CoursesItemComponent,
    CoursesListComponent
  ],
  exports: [ CoursesListComponent ]
})

export class CoursesModule { }
