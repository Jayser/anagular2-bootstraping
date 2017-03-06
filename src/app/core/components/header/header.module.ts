import { NgModule } from '@angular/core';

import { LogoModule } from '../../../shared/components/logo';
import { LoginModule } from '../../../shared/components/login';
import { HeaderComponent } from './header.component';
@NgModule({
  imports: [ LogoModule, LoginModule ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})

export class HeaderModule {

}
