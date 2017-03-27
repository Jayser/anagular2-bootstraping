import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../shared/services/authorization';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  public model = {};

  constructor(private authorizationService: AuthorizationService,
              private router: Router) {
    authorizationService.stream.subscribe(({ login }) => {
      if (login) {
        this.router.navigateByUrl('/courses');
      }
    })
  }

  public onSubmit({ value: { username, password } }) {
    this.authorizationService.login(username, password);
  }
}
