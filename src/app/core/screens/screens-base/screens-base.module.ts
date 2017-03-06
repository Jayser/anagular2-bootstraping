import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '../../components/header';
import { FooterModule } from '../../components/footer';
import { ScreensBaseComponent } from './screens-base.component';

@NgModule({
  imports: [ RouterModule, HeaderModule, FooterModule ],
  declarations: [ ScreensBaseComponent ],
  exports: [ ScreensBaseComponent ]
})

export class ScreensBaseModule { }
