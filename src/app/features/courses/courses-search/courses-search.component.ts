import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'courses-search',
  templateUrl: './courses-search.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesSearchComponent {
  public coursesSearchForm = {
    searchQuery: '',
    searchPlaceholder: 'Search...'
  };

  public onSubmit({ value }) {
    console.log(value);
  }
}
