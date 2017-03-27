import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AuthorizatonInterface } from './authorization.interface';
import CONSTANTS from '../../constants';

@Injectable()
export class AuthorizationService {
  private subject = new Subject();
  public userInfo: AuthorizatonInterface | null;
  public stream;

  constructor() {
    const userInfo = localStorage.getItem(CONSTANTS.AUTH.STORAGE_NAME);

    this.stream = this.subject.asObservable();

    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }
  }

  public login(login: string, password: string): void {
    if (login && password) {
      this.subject.next({ login });
      this.userInfo = { login };
      localStorage.setItem(CONSTANTS.AUTH.STORAGE_NAME, JSON.stringify(this.userInfo));
    }
  }

  public logout(): void {
    this.subject.next({});
    this.userInfo = null;
    localStorage.removeItem(CONSTANTS.AUTH.STORAGE_NAME);
  }
}
