import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddCourseComponent } from './add-course.component';

@NgModule({
  imports: [ FormsModule, CommonModule ],
  declarations: [ AddCourseComponent ],
  exports: [ AddCourseComponent ]
})

export class AddCourseModule { }
