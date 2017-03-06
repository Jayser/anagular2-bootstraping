import { NgModule } from '@angular/core';

import { SharedComponentsModule } from './components';

@NgModule({
  imports: [
    SharedComponentsModule
  ],
  exports: [
    SharedComponentsModule
  ]
})

export class SharedModule { }
