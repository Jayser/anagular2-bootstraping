import { NgModule } from '@angular/core';

import { AuthorizationService } from './services/authorization';
import { SharedComponentsModule } from './components';

@NgModule({
  imports: [
    SharedComponentsModule
  ],
  exports: [
    SharedComponentsModule
  ],
  providers: [
    AuthorizationService
  ]
})

export class SharedModule { }
