import { Injectable } from '@angular/core';

import { AuthorizatonInterface } from './authorization.interface';
import CONSTANTS from '../../constants';

@Injectable()
export class AuthorizationService {
  private authorizationInfo: AuthorizatonInterface;

  constructor() {
    const authorizationInfo = localStorage.getItem(CONSTANTS.AUTH.STORAGE_NAME);

    if (authorizationInfo) {
      this.authorizationInfo = JSON.parse(authorizationInfo);
    }
  }

  public login(login: string, password: string): AuthorizatonInterface {
    if (login && password) {
      this.authorizationInfo = { login };
      localStorage.setItem(CONSTANTS.AUTH.STORAGE_NAME, JSON.stringify(this.authorizationInfo));
    }
    return this.authorizationInfo;
  }

  public logout(): void {
    this.authorizationInfo = null;
    localStorage.removeItem(CONSTANTS.AUTH.STORAGE_NAME);
  }

  public isAuthenticated(): boolean {
    return Boolean(this.getUserInfo());
  }

  public getUserInfo(): AuthorizatonInterface {
    return this.authorizationInfo;
  }
}
