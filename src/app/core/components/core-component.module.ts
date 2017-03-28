import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './header';
import { FooterModule } from './footer';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    HeaderModule,
    FooterModule
  ]
})

export class CoreComponentsModule { }
