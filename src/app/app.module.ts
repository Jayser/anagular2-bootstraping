import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { CommonModule } from '@angular/common';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features';
import { SharedModule } from './shared';
import { CoreModule } from './core';

import { CoursesService } from './features/courses/shared/services/courses.service';

import '../styles/styles.scss';
import '../styles/headings.css';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FeaturesModule,
    BrowserModule,
    routes
  ],
  providers: [ CoursesService ],
})

export class AppModule {

  constructor(public appRef: ApplicationRef) {}

  public hmrOnInit(store) {
    if (!store || !store.state) {
      return;
    }
    // set state
    console.log('HMR store', store);

    // this.AppStore.update(store.state)
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // inject your AppStore and grab state then set it on store
    // var appState = this.AppStore.get()
    store.state = {data: 'yolo'};
    // store.state = Object.assign({}, appState)
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
}
