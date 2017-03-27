import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreComponentsModule } from '../../components';
import { ScreensBaseComponent } from './screens-base.component';

@NgModule({
  imports: [ RouterModule, CoreComponentsModule ],
  declarations: [ ScreensBaseComponent ],
  exports: [ ScreensBaseComponent ]
})

export class ScreensBaseModule { }
