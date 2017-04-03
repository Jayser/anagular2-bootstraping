import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({ selector: '[coursesHighlight]' })

export class CoursesHighlightDirective implements OnInit{
  @Input('coursesHighlight') createdDate: number;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const createdDate = moment(this.createdDate);
    const currentDate = moment(Date.now());
    const dayDifference = moment(currentDate).diff(createdDate, 'days');

    if (dayDifference) {
      this.el.nativeElement.style.border = '3px solid blue';
    } else {
      this.el.nativeElement.style.border = '3px solid green';
    }
  }
}
