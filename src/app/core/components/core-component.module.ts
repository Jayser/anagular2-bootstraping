import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './header';
import { FooterModule } from './footer';

import { LoaderBlockComponent } from './loader-block';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [
    LoaderBlockComponent
  ],
  exports: [
    LoaderBlockComponent,
    HeaderModule,
    FooterModule
  ]
})

export class CoreComponentsModule { }
