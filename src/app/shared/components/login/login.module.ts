import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ]
})

export class LoginModule { }
