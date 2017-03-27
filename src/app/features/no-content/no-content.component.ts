import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NoContentComponent { }
