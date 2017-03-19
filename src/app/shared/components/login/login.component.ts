import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../shared/services/authorization';

@Component({
  selector: 'sh-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.template.html',
  providers: [ AuthorizationService ]
})

export class LoginComponent {
  constructor(private authorizationService: AuthorizationService,
              private router: Router) {}

  public isAuthenticated(): boolean {
    return this.authorizationService.isAuthenticated();
  }

  public logout(): void {
    this.authorizationService.logout();
    this.router.navigateByUrl('/login');
  }
}
