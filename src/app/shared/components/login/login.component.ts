import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../shared/services/authorization';

@Component({
  selector: 'sh-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.template.html'
})

export class LoginComponent {
  public isAuthenticated: boolean = false;

  constructor(private authorizationService: AuthorizationService,
              private router: Router) {
    authorizationService.stream.subscribe(({ login }) => {
      this.isAuthenticated = Boolean(login);

      if (!login) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  public logout(): void {
    this.authorizationService.logout();
  }
}
