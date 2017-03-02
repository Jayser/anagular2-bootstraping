import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { LogoModule } from './logo/logo.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  imports: [
    LogoModule,
    LoginModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    LoginModule,
    LogoModule,
    HeaderModule,
    FooterModule
  ]
})

export class SharedModule { }
