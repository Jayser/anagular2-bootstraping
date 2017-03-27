import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { LoaderBlockService } from '../../../shared/services/loader-block'

@Component({
  selector: 'cr-loader-block',
  templateUrl: 'loader-block.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoaderBlockComponent {
  public isLoading: boolean = false;

  constructor(private loaderBlockService: LoaderBlockService,
              private cd: ChangeDetectorRef){
    loaderBlockService.stream.subscribe(({ isLoading }) => {
      this.isLoading = isLoading;
      this.cd.markForCheck();
    })
  }
}
