import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderBlockService {
  private subject = new Subject();
  public state: boolean = false;
  public stream;

  constructor() {
    this.stream = this.subject.asObservable();
  }

  public show(): void {
    this.state = true;
    this.subject.next({ isLoading: true });
  }

  public hide(): void {
    this.state = false;
    this.subject.next({ isLoading: false });
  }
}
