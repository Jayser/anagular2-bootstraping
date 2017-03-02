import { Routes } from '@angular/router';
import { CoursesViewComponent } from './features/courses/courses-view/courses-view.component';
import { HomeComponent } from './features/home/home.component';
import { NoContentComponent } from './features/no-content/no-content.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesViewComponent },
  { path: '**', component: NoContentComponent },
];
