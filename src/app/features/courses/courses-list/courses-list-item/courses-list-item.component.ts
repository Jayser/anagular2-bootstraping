import { Component, Input } from '@angular/core';

@Component({
  selector: 'courses-list-item',
  styleUrls: ['./courses-list-item.component.scss'],
  templateUrl: './courses-list-item.template.html'
})

export class CoursesListItemComponent {
  @Input() public course;
}
