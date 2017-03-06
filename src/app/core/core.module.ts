import { NgModule } from '@angular/core';

import { CoreComponentsModule } from './components';
import { CoreScreensModule } from './screens';

@NgModule({
  imports: [
    CoreComponentsModule,
    CoreScreensModule
  ],
  exports: [
    CoreComponentsModule,
    CoreScreensModule
  ]
})

export class CoreModule { }
