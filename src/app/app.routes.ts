import { Routes } from '@angular/router';
import { CoursesComponent } from './courses';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'courses',  component: CoursesComponent },
  { path: '**',    component: NoContentComponent },
];
