import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../shared/services/authorization';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  providers: [ AuthorizationService ]
})

export class LoginComponent {
  public model = {};

  constructor(private authorizationService: AuthorizationService,
              private router: Router) { }

  public onSubmit({ value: { username, password } }) {
    this.authorizationService.login(username, password);
    this.router.navigateByUrl('/courses');
  }
}
