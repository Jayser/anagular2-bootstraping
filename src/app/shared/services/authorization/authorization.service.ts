import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AuthorizatonInterface } from './authorization.interface';
import { LoaderBlockService } from '../loader-block';
import CONSTANTS from '../../constants';

@Injectable()
export class AuthorizationService {
  private subject = new Subject();
  public userInfo: AuthorizatonInterface | null;
  public stream;

  constructor(private http: Http,
              private loaderBlockService: LoaderBlockService) {
    const userInfo = localStorage.getItem(CONSTANTS.AUTH.STORAGE_NAME);

    this.stream = this.subject.asObservable();

    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
      this.login(this.userInfo);
    }
  }

  public login({ username}): void {
    if (username) {
      this.loaderBlockService.show();

      this.http.get(`http://ng2mp.getsandbox.com/users/${username}`)
        .map((res) => res.json())
        .catch((error: Response | any = '') => {
          this.loaderBlockService.hide();
          return Observable.throw(error.toString());
        })
        .subscribe(({ username }) => {
          this.loaderBlockService.hide();
          this.subject.next({ username });
          this.userInfo = { username };
          localStorage.setItem(CONSTANTS.AUTH.STORAGE_NAME, JSON.stringify(this.userInfo));
        });
    }
  }

  public logout(): void {
    this.subject.next({});
    this.userInfo = null;
    localStorage.removeItem(CONSTANTS.AUTH.STORAGE_NAME);
  }
}
