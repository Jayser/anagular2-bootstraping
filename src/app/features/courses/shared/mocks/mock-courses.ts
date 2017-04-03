import { Course } from '../interfaces/course.interface';

export const COURSES: Course[] = [
  {
    id: 0,
    thumb: 'http://placehold.it/50x50',
    thumbAlt: 'Generic placeholder image',
    title: 'Implemented built-in directives and pipes. App not started.',
    creatingDate: 1459667875000,
    duration: 28,
    topRated: true,
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
    title: 'Built-in + partially custom pipes and directives. Major issues',
    creatingDate: 1483427875000,
    duration: 63,
    topRated: false,
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
    title: 'Done all above including orderBy pipe without major issues',
    creatingDate: 1491203875000,
    duration: 130,
    topRated: true,
    description: `
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
          Fusce condimentum nunc ac nisi vulputate fringilla. 
          Donec lacinia congue felis in faucibus.
        `
  }
];
