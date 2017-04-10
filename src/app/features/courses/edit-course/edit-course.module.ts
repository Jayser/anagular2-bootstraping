import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EditCourseComponent } from './edit-course.component';

@NgModule({
  imports: [ FormsModule, CommonModule ],
  declarations: [ EditCourseComponent ],
  exports: [ EditCourseComponent ]
})

export class EditCourseModule { }
