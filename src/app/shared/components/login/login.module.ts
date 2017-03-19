import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { AuthorizationService } from '../../../shared/services/authorization';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ],
  providers: [ AuthorizationService ]
})

export class LoginModule { }
