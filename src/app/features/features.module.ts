import { NgModule } from '@angular/core';

import { CoursesModule } from './courses/courses.module';
import { HomeModule } from './home/home.module';
import { NoContentModule } from './no-content/no-content.module';

@NgModule({
  imports: [
    CoursesModule,
    HomeModule,
    NoContentModule
  ]
})

export class FeaturesModule { }
