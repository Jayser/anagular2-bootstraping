import { RouterModule, Routes } from '@angular/router';

import { ScreensBaseComponent } from './core/screens/screens-base';
import { AddCourseComponent } from './features/courses/add-course';
import { EditCourseComponent } from './features/courses/edit-course';
import { CoursesViewComponent } from './features/courses';
import { CoursesListComponent } from './features/courses/courses-list';
import { HomeComponent } from './features/home';
import { LoginComponent } from './features/login';
import { NoContentComponent } from './features/no-content';

export const ROUTES: Routes = [
  {
    path: '',
    component: ScreensBaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          breadcrumb: "login"
        }
      },
      {
        path: 'courses',
        component: CoursesViewComponent,
        data: {
          breadcrumb: "courses"
        },
        children: [
          {
            path: '',
            component: CoursesListComponent,
            data: {
              breadcrumb: "list"
            },
          },
          {
            path: 'new',
            component: AddCourseComponent,
            data: {
              breadcrumb: "new"
            }
          },
          {
            path: ':id',
            component: EditCourseComponent,
            data: {
              breadcrumb: "edit"
            }
          }
        ]
      }
    ]
  },
  { path: '**', component: NoContentComponent },
];

export const routes = RouterModule.forRoot(ROUTES);
