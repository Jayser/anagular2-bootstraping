import { NgModule } from '@angular/core';

import { CoursesModule } from './courses';
import { HomeModule } from './home';
import { NoContentModule } from './no-content';

@NgModule({
  imports: [
    CoursesModule,
    HomeModule,
    NoContentModule
  ]
})

export class FeaturesModule { }
