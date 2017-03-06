import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { LogoModule } from './logo/logo.module';

@NgModule({
  imports: [
    LogoModule,
    LoginModule
  ],
  exports: [
    LoginModule,
    LogoModule
  ]
})

export class SharedComponentsModule { }
