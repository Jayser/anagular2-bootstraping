import { RouterModule, Routes } from '@angular/router';

import { ScreensBaseComponent } from './core/screens/screens-base';
import { AddCourseComponent } from './features/courses/add-course';
import { EditCourseComponent } from './features/courses/edit-course';
import { CoursesViewComponent } from './features/courses';
import { HomeComponent } from './features/home';
import { LoginComponent } from './features/login';
import { NoContentComponent } from './features/no-content';

export const ROUTES: Routes = [
  {
    path: '',
    component: ScreensBaseComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'courses', component: CoursesViewComponent },
      { path: 'add-course', component: AddCourseComponent },
      { path: 'edit-course/:id', component: EditCourseComponent }
    ]
  },
  { path: '**', component: NoContentComponent },
];

export const routes = RouterModule.forRoot(ROUTES);
