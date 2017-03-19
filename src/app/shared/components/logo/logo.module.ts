import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './logo.component';

@NgModule({
  imports: [ RouterModule ],
  declarations: [ LogoComponent ],
  exports: [ LogoComponent ]
})

export class LogoModule { }
