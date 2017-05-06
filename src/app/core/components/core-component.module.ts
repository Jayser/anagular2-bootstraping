import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './header';
import { FooterModule } from './footer';

import { BreadcrumbComponent } from './breadcrumb';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [ BreadcrumbComponent ],
  exports: [
    HeaderModule,
    FooterModule,
    BreadcrumbComponent
  ]
})

export class CoreComponentsModule { }
