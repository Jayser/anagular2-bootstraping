import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ng2-bootstrap';

import { CoursesViewComponent } from './courses-view/courses-view.component';
import { CoursesAddComponent } from './courses-add/courses-add.component';
import { CoursesSearchComponent } from './courses-search/courses-search.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list/courses-list-item/courses-list-item.component';
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
