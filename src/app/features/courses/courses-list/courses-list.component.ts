import { Component } from '@angular/core';

@Component({
  selector: 'courses-list',
  styleUrls: [ './courses-list.component.scss' ],
  templateUrl: './courses-list.template.html'
})

export class CoursesListComponent {
  get courses() {
    return [
      {
        thumb: 'http://placehold.it/50x50',
        thumbAlt: 'Generic placeholder image',
        title: 'Media heading',
        date: new Date().getDate(),
        duration: '58 min.',
        description: `
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
          Fusce condimentum nunc ac nisi vulputate fringilla. 
          Donec lacinia congue felis in faucibus.
        `
      },
      {
        thumb: 'http://placehold.it/50x50',
        thumbAlt: 'Generic placeholder image',
        title: 'Media heading',
        date: new Date().getDate(),
        duration: '58 min.',
        description: `
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
          Fusce condimentum nunc ac nisi vulputate fringilla. 
          Donec lacinia congue felis in faucibus.
        `
      },
      {
        thumb: 'http://placehold.it/50x50',
        thumbAlt: 'Generic placeholder image',
        title: 'Media heading',
        date: new Date().getDate(),
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
