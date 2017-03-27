import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AuthorizatonInterface } from './authorization.interface';
import { LoaderBlockService } from '../loader-block';
import CONSTANTS from '../../constants';

@Injectable()
export class AuthorizationService {
  private subject = new Subject();
  public userInfo: AuthorizatonInterface | null;
  public stream;

  constructor(private loaderBlockService: LoaderBlockService) {
    const userInfo = localStorage.getItem(CONSTANTS.AUTH.STORAGE_NAME);

    this.stream = this.subject.asObservable();

    this.stream.subscribe(() => {
      this.loaderBlockService.hide();
    });

    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }
  }

  public login(login: string, password: string): void {
    this.loaderBlockService.show();
    if (login && password) {
      setTimeout(() => {
        this.subject.next({ login });
      }, 2000);
      this.userInfo = { login };
      localStorage.setItem(CONSTANTS.AUTH.STORAGE_NAME, JSON.stringify(this.userInfo));
    }
  }

  public logout(): void {
    this.loaderBlockService.show();
    setTimeout(() => {
      this.subject.next({});
    }, 2000);
    this.userInfo = null;
    localStorage.removeItem(CONSTANTS.AUTH.STORAGE_NAME);
  }
}
