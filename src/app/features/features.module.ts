import { NgModule } from '@angular/core';

import { CoursesModule } from './courses';
import { HomeModule } from './home';
import { LoginModule } from './login';
import { NoContentModule } from './no-content';

@NgModule({
  imports: [
    CoursesModule,
    LoginModule,
    HomeModule,
    NoContentModule
  ]
})

export class FeaturesModule { }
