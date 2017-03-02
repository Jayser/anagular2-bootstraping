import { NgModule } from '@angular/core';

import { LogoModule } from '../logo/logo.module';
import { LoginModule } from '../login/login.module';
import { HeaderComponent } from './header.component';
@NgModule({
  imports: [ LogoModule, LoginModule ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})

export class HeaderModule {

}
