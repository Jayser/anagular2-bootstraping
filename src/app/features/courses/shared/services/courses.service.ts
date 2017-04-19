import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Course } from '../interfaces/course.interface';

import { LoaderBlockService } from '../../../../shared/services/loader-block';

@Injectable()
export class CoursesService {
  public courses: BehaviorSubject<Array<Course>> = new BehaviorSubject([]);

  constructor(private http: Http,
              private loaderBlockService: LoaderBlockService) {
    this.getCourses();

    this.courses.subscribe((value) => {
      console.log('====>', value)
    })
  }

  getCourses(): void {
    this.loaderBlockService.show();

    this.http.get(`http://ng2mp.getsandbox.com/courses`)
      .map((res) => res.json())
      .catch((error: Response | any = '') => {
        this.loaderBlockService.hide();
        return Observable.throw(error.toString());
      })
      .subscribe((courses: Array<Course>) => {
        this.courses.next(this.courses.value.concat(courses));
        this.loaderBlockService.hide();
      });
  }

  public getItemById(id: number): Course {
    return this.courses.value.find((course) => course.id === id);
  }

  public createItem(item: Course): void {
    this.loaderBlockService.show();

    this.http.post(`http://ng2mp.getsandbox.com/courses`, item)
      .map((res) => res.json())
      .catch((error: Response | any = '') => {
        this.loaderBlockService.hide();
        return Observable.throw(error.toString());
      })
      .subscribe(() => {
        this.courses.next(this.courses.value.concat(item));
        this.loaderBlockService.hide();
      });
  }

  public updateItem(id: number, item: Course): void {
    const course = this.getItemById(id);

    if (course) {
      this.loaderBlockService.show();

      this.http.put(`http://ng2mp.getsandbox.com/courses/${id}`, item)
        .map((res) => res.json())
        .catch((error: Response | any = '') => {
          this.loaderBlockService.hide();
          return Observable.throw(error.toString());
        })
        .subscribe(() => {
          const res = this.courses.value;
          const courseIndex = res.findIndex(item => item.id === id);

          res[courseIndex] = { ...course, ...item };

          this.courses.next(res);
          this.loaderBlockService.hide();
        });
    }
  }

  public removeItem(id: number): void {
    const idx = this.courses.value.findIndex((course) => course.id === id);

    if ((id || id === 0)) {
        this.loaderBlockService.show();

        this.http.delete(`http://ng2mp.getsandbox.com/courses/${id}`)
          .map((res) => res.json())
          .catch((error: Response | any = '') => {
            this.loaderBlockService.hide();
            return Observable.throw(error.toString());
          })
          .subscribe(() => {
            const res = this.courses.value;
            res.splice(idx, 1);
            this.courses.next(res);
            this.loaderBlockService.hide();
          });
    }
  }

  public size(): number {
    return this.courses.value.length;
  }
}
