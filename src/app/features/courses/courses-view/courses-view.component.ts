import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'courses',
  styleUrls: [ './courses-view.component.scss' ],
  templateUrl: 'courses-view.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesViewComponent {
  public filterBy: string;

  onFilter(query: string) {
    this.filterBy = query;
  }
}
