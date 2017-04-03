import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderBlockService {
  private subject = new Subject();
  public stream;

  constructor() {
    this.stream = this.subject.asObservable();
  }

  public show(): void {
    this.subject.next({ isLoading: true });
  }

  public hide(): void {
    this.subject.next({ isLoading: false });
  }
}
