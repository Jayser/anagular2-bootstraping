import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../shared/services/authorization';

@Component({
  selector: 'sh-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  public isAuthenticated: boolean = false;

  constructor(private authorizationService: AuthorizationService,
              private cd: ChangeDetectorRef,
              private router: Router) {
    authorizationService.stream.subscribe(({ username }) => {
      this.isAuthenticated = Boolean(username);

      if (!username) {
        this.router.navigateByUrl('/login');
      }

      this.cd.markForCheck();
    });
  }

  public logout(): void {
    this.authorizationService.logout();
  }
}
