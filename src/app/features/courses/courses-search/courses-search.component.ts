import { Component, EventEmitter, ChangeDetectionStrategy, Output } from '@angular/core';

@Component({
  selector: 'courses-search',
  templateUrl: './courses-search.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesSearchComponent {
  @Output() onFilter = new EventEmitter<string>();

  public coursesSearchForm = {
    searchQuery: '',
    searchPlaceholder: 'Search...'
  };

  public onSubmit({ value: { searchQuery } }) {
    this.onFilter.emit(searchQuery);
  }
}
