import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { LoaderBlockService } from '../../services'

@Component({
  selector: 'cr-loader-block',
  styleUrls: [ './loader-block.component.scss' ],
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
