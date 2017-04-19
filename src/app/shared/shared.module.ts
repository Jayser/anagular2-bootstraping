import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  AuthorizationService,
  LoaderBlockService
} from './services';

import { SharedComponentsModule } from './components';

@NgModule({
  imports: [
    SharedComponentsModule,
    HttpModule
  ],
  exports: [
    SharedComponentsModule
  ],
  providers: [
    AuthorizationService,
    LoaderBlockService
  ]
})

export class SharedModule { }
