import { NgModule } from '@angular/core';

import { ScreensBaseModule } from './screens-base';

@NgModule({
  imports: [ ScreensBaseModule ],
  exports: [ ScreensBaseModule ]
})

export class CoreScreensModule { }
