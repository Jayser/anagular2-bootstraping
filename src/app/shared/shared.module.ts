import { NgModule } from '@angular/core';

import {
  AuthorizationService,
  LoaderBlockService
} from './services';

import { SharedComponentsModule } from './components';

@NgModule({
  imports: [
    SharedComponentsModule
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
