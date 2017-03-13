import { Component, OnInit } from '@angular/core';
import { course } from '../shared/interfaces/course.interface';

@Component({
  selector: 'courses-list',
  styleUrls: [ './courses-list.component.scss' ],
  templateUrl: './courses-list.template.html'
})

export class CoursesListComponent implements OnInit {
  private courses: course[];

  constructor() {
    this.courses = [];
  }

  public handleDeleteCourse(course: course[]) {
    console.info('course to delete is', course);
  }

  public ngOnInit() {
    this.courses = [
      {
        id: 0,
        thumb: 'http://placehold.it/50x50',
        thumbAlt: 'Generic placeholder image',
        title: 'Media heading',
        creatingDate: new Date().getDate(),
        duration: '58 min.',
        description: `
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
          Fusce condimentum nunc ac nisi vulputate fringilla. 
          Donec lacinia congue felis in faucibus.
        `
      },
      {
        id: 1,
        thumb: 'http://placehold.it/50x50',
        thumbAlt: 'Generic placeholder image',
        title: 'Media heading',
        creatingDate: new Date().getDate(),
        duration: '58 min.',
        description: `
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
          Fusce condimentum nunc ac nisi vulputate fringilla. 
          Donec lacinia congue felis in faucibus.
        `
      },
      {
        id: 2,
        thumb: 'http://placehold.it/50x50',
        thumbAlt: 'Generic placeholder image',
        title: 'Media heading',
        creatingDate: new Date().getDate(),
        duration: '58 min.',
        description: `
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
          Fusce condimentum nunc ac nisi vulputate fringilla. 
          Donec lacinia congue felis in faucibus.
        `
      }
    ];
  }
}
