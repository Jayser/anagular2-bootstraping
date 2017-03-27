import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AuthorizatonInterface } from './authorization.interface';
import CONSTANTS from '../../constants';

@Injectable()
export class AuthorizationService {
  private subject = new Subject();
  public authorizationInfo: AuthorizatonInterface | null;
  public stream;

  constructor() {
    const authorizationInfo = localStorage.getItem(CONSTANTS.AUTH.STORAGE_NAME);

    this.stream = this.subject.asObservable();

    if (authorizationInfo) {
      this.authorizationInfo = JSON.parse(authorizationInfo);
    }
  }

  public login(login: string, password: string): void {
    if (login && password) {
      this.subject.next({ login });
      this.authorizationInfo = { login };
      localStorage.setItem(CONSTANTS.AUTH.STORAGE_NAME, JSON.stringify(this.authorizationInfo));
    }
  }

  public logout(): void {
    this.subject.next({});
    this.authorizationInfo = null;
    localStorage.removeItem(CONSTANTS.AUTH.STORAGE_NAME);
  }
}
