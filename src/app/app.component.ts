/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]="['./']"
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        home
      </a>
      <a [routerLink]="['./courses']"
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        courses
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
