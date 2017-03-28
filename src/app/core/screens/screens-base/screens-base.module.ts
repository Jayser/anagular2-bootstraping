import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreComponentsModule } from '../../components';
import { ScreensBaseComponent } from './screens-base.component';
import { SharedComponentsModule } from '../../../shared/components';

@NgModule({
  imports: [
    RouterModule,
    CoreComponentsModule,
    SharedComponentsModule
  ],
  declarations: [ ScreensBaseComponent ],
  exports: [ ScreensBaseComponent ]
})

export class ScreensBaseModule { }
