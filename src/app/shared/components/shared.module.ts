import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { LogoModule } from './logo/logo.module';

import { LoaderBlockComponent } from './loader-block';

@NgModule({
  imports: [
    CommonModule,
    LogoModule,
    LoginModule
  ],
  declarations: [
    LoaderBlockComponent
  ],
  exports: [
    LoginModule,
    LogoModule,
    LoaderBlockComponent
  ]
})

export class SharedComponentsModule { }
